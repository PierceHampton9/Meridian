# Meridian

Meridian is an open-source research workflow for finding professional pain points in a specific industry and turning them into weekly opportunity briefings.

The system is designed around a simple idea: AI is better used to surface signal than to pretend it has answers. Each run is human-steered. You choose a focus, add your own context if you want, and Meridian gathers recent sources, extracts recurring pain points, and synthesizes a briefing you can review in a self-hosted dashboard.

## Planned Repository Layout

- `config/` industry source packs and focus rotation definitions
- `db/` PostgreSQL schema for industries, briefings, and extracted pain points
- `n8n/` workflow exports for ingestion, filtering, and LLM synthesis
- `dashboard/` a Next.js frontend for browsing weekly briefings

## Current Status

The repository is in a very early phase. Initial work is focused on:

- defining the industry config contract
- setting up the database schema
- building the first runnable dashboard scaffold before adding the full workflow

Committed so far:

- a journalism source config
- the initial PostgreSQL schema
- a minimal Next.js dashboard scaffold in `dashboard/`

## Local Development

To run the dashboard locally:

```bash
cd dashboard
npm install
npm run dev
```

## Planned Stack

- `n8n` for orchestration
- `PostgreSQL` for storage
- `Next.js` for the dashboard
- `Docker Compose` for local self-hosting
