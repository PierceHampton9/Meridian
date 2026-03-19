# n8n Workflow

This directory contains the first Meridian workflow foundation.

- `workflow.json` is an importable n8n workflow export.
- `prompts/` contains the current pass-1 and pass-2 prompt templates.

The workflow foundation now uses one live RSS ingestion path while keeping extraction, synthesis, and database writes mocked. Feed items are filtered through the configured lookback window, then normalized into plain-text, prompt-safe source documents with bounded content length before they move further through the workflow.

The seed node currently carries a mocked snapshot of the journalism config contract to keep the workflow importable without file-system reads. Replace that snapshot with a real config-loading step in a later slice.

The next workflow slice should expand beyond a single RSS source and replace the mocked extraction and synthesis steps with real integrations.
