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
- An n8n workflow with live multi-source RSS ingestion, relevance scoring, and live pass-1 Gemini extraction
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

After importing the workflow, create an n8n `Header Auth` credential with `x-goog-api-key` as the header name and your Gemini API key as the value, then attach it to the `Gemini Pass 1 Extraction` node.

The current workflow also throttles live pass-1 extraction for testing: it allows up to 6 selected source documents per run, scores candidates for focus relevance before extraction, and spaces requests inside n8n to reduce preview-model rate-limit failures. If no recent source clears the relevance threshold, the workflow currently stops before live pass-1 extraction; Gemini and downstream extraction nodes are not invoked for that execution.

## Planned Stack

- `n8n` for orchestration
- `PostgreSQL` for storage
- `Next.js` for the dashboard
- `Docker Compose` for local self-hosting
