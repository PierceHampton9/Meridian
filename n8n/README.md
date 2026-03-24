# n8n Workflow

This directory contains the current Meridian workflow foundation.

- `workflow.json` is an importable n8n workflow export.
- `prompts/` contains the current pass-1 and pass-2 prompt templates.

The workflow foundation now starts from a real n8n Form Trigger submission, loads the journalism config from `config/journalism.json` relative to the n8n working directory, selects the matching RSS sources for the chosen focus, and runs a live Gemini pass-1 extraction step. Feed items are filtered through the configured lookback window, then normalized into plain-text, prompt-safe source documents with bounded content length. Before live extraction, the workflow scores those candidate documents for focus relevance and only sends the selected subset into Gemini. Pass 1 now tries `gemini-3.1-flash-lite-preview` first and falls back to `gemini-2.5-flash-lite` only for source documents whose preview call fails.

Before running the workflow, start n8n from the repository root so this relative path exists:

- `config/journalism.json`

The workflow reads that file with the `Read/Write Files from Disk` node. The intended local command is:

- `cd /path/to/Meridian && npx n8n`

When Docker lands, the container should preserve the same relative working-directory contract rather than introduce a different path for the workflow.

The workflow expects a standard n8n `Header Auth` credential for Gemini when you want pass-1 extraction to run live.

Create it in n8n with:

- `Name`: `x-goog-api-key`
- `Value`: your Gemini API key

Then attach that credential to both Gemini HTTP nodes after importing the workflow:

- `Gemini Pass 1 Extraction`
- `Gemini Fallback Extraction`

For the current testing slice, pass-1 live extraction is intentionally throttled:

- the workflow allows up to 6 source documents per run
- the Gemini node sends requests one at a time with a delay between them

This keeps preview-model quota and rate-limit failures less likely while the workflow is still under active iteration, and the fallback model gives the workflow a second chance when preview capacity is temporarily constrained.

The current relevance filter is deterministic and intentionally simple:

- exact focus keyword matches are weighted most heavily
- title matches score higher than content-only matches
- user-context overlap can boost borderline items
- if nothing clears the primary threshold, the workflow can still keep a small low-confidence fallback set for manual review

This means the workflow now exposes both:

- `source_candidates`: a lightweight scored view of the candidate source documents considered for pass-1
- `source_batch`: the smaller selected set that actually reaches Gemini

If `source_batch` is empty after scoring, the workflow treats that as a valid outcome. With the current linear node wiring, that means `Prepare Live Pass 1 Calls` emits zero items, so Gemini and the downstream extraction nodes do not execute for that run.

The trigger form currently mirrors the journalism focus labels directly in the node definition so the workflow stays importable. The source selection and downstream run context are now config-backed, but the suggested focus list itself is not yet rendered dynamically from the loaded config.

Non-RSS sources selected by the config are currently carried forward as deferred metadata only. Pass 2 synthesis and database writes are still mocked. The next workflow slice should expand beyond RSS-only source coverage or replace the mocked pass-2 and persistence steps with real integrations.
