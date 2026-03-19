# n8n Workflow

This directory contains the first Meridian workflow foundation.

- `workflow.json` is an importable n8n workflow export.
- `prompts/` contains the current pass-1 and pass-2 prompt templates.

The workflow foundation is intentionally runnable with mocked source documents and mocked LLM output so the data path can be reviewed before live RSS, Reddit, HTTP, LLM, and PostgreSQL nodes are wired in.

The next workflow slice should replace the mocked source and synthesis steps with real integrations.
