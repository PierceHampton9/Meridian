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
- building a clean repo structure before adding the full dashboard and workflow

The first committed foundation artifacts are the journalism source config and database schema. The workflow and dashboard will follow in later slices.

## Planned Stack

- `n8n` for orchestration
- `PostgreSQL` for storage
- `Next.js` for the dashboard
- `Docker Compose` for local self-hosting
