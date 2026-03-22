# n8n Workflow

This directory contains the current Meridian workflow foundation.

- `workflow.json` is an importable n8n workflow export.
- `prompts/` contains the current pass-1 and pass-2 prompt templates.

The workflow foundation now uses multiple live RSS sources for the active focus and a live Gemini 3.1 Flash-Lite Preview pass-1 extraction step. Feed items are filtered through the configured lookback window, then normalized into plain-text, prompt-safe source documents with bounded content length before they move further through the workflow.

The workflow expects a standard n8n `Header Auth` credential for Gemini when you want pass-1 extraction to run live.

Create it in n8n with:

- `Name`: `x-goog-api-key`
- `Value`: your Gemini API key

Then attach that credential to the `Gemini Pass 1 Extraction` node after importing the workflow.

For the current testing slice, pass-1 live extraction is intentionally throttled:

- the workflow allows up to 6 source documents per run
- the Gemini node sends requests one at a time with a delay between them

This keeps preview-model quota and rate-limit failures less likely while the workflow is still under active iteration.

The seed node currently carries a mocked snapshot of the journalism config contract to keep the workflow importable without file-system reads. Replace that snapshot with a real config-loading step in a later slice.

Pass 2 synthesis and database writes are still mocked. The next workflow slice should expand beyond RSS-only source coverage or replace the mocked pass-2 and persistence steps with real integrations.
