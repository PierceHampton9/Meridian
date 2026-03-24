# Meridian

Meridian is an open-source research workflow for finding professional pain points in a specific industry and turning them into weekly opportunity briefings.

The system is designed around a simple idea: AI is better used to surface signal than to pretend it has answers. Each run is human-steered. You choose a focus, add your own context if you want, and Meridian gathers recent sources, extracts recurring pain points, and synthesizes a briefing you can review in a self-hosted dashboard.

## Repository Structure

- `config/` industry source packs and focus rotation definitions
- `db/` PostgreSQL schema for industries, briefings, and extracted pain points
- `n8n/` workflow exports for ingestion, filtering, and LLM synthesis
- `dashboard/` a Next.js frontend for browsing weekly briefings

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the current system shape, data boundaries, and planned workflow path.

## Current Status

The repository is in a very early phase. Initial work is focused on:

- Defining the industry config contract
- Setting up the database schema
- Replacing mocked workflow steps with live source, LLM, and database integrations

Committed so far:

- A journalism source config
- The initial PostgreSQL schema
- An n8n workflow with a real form-triggered entry step, config loading from disk, live RSS ingestion, relevance scoring, and live pass-1 Gemini extraction
- A minimal Next.js dashboard scaffold in `dashboard/`

## Local Development

To run the dashboard locally:

```bash
cd dashboard
npm install
npm run dev
```

To run n8n locally with the current live pass-1 extraction step:

```bash
npx n8n
```

The workflow now expects the journalism config at `config/journalism.json` relative to the directory where you start n8n. The intended local flow is to run `npx n8n` from the repository root.

After importing the workflow:

- submit the built-in n8n form trigger to choose a suggested focus, optional custom focus, and optional context
- create an n8n `Header Auth` credential with `x-goog-api-key` as the header name and your Gemini API key as the value
- attach that credential to both `Gemini Pass 1 Extraction` and `Gemini Fallback Extraction`

The current workflow also throttles live pass-1 extraction for testing: it allows up to 6 selected source documents per run, scores candidates for focus relevance before extraction, and spaces requests inside n8n to reduce rate-limit failures. It tries the preview Gemini model first and only falls back to a stable flash-lite model for source documents whose preview requests fail. If no recent source clears the relevance threshold, the workflow currently stops before live pass-1 extraction; Gemini and downstream extraction nodes are not invoked for that execution.

In this slice, the workflow loads the journalism config from `config/journalism.json` relative to the n8n working directory and uses the selected suggested focus as the source-selection anchor. If a custom focus override is provided, Meridian keeps the selected track for source selection and blends the custom focus text into prompt steering and relevance scoring.

## Planned Stack

- `n8n` for orchestration
- `PostgreSQL` for storage
- `Next.js` for the dashboard
- `Docker Compose` for local self-hosting
