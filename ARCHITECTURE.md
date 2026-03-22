# Architecture

## Purpose

Meridian is a human-steered research workflow for turning recent industry signal into weekly briefings. The system is designed to gather source material, extract recurring pain points, synthesize them into opportunity-oriented briefings, and present the result in a self-hosted dashboard.

## System Shape

The intended runtime path is:

1. A human selects a focus and optionally adds context.
2. The workflow ingests recent sources for the selected industry.
3. The workflow filters, normalizes, and scores source material for focus relevance.
4. LLM pass 1 extracts structured pain points.
5. LLM pass 2 synthesizes a weekly briefing.
6. PostgreSQL stores the briefing and extracted pain points.
7. The dashboard reads stored briefings and renders public pages.

As of today, steps 1-3 are represented by workflow scaffolding with multiple live RSS ingestion paths, deterministic relevance scoring, and source selection in `n8n/workflow.json`, step 4 is represented by a live Gemini 3.1 Flash-Lite Preview-backed pass-1 extraction step, step 5 remains mocked inside that workflow, step 6 is represented by the schema, and step 7 is represented by the dashboard scaffold with mocked data.

## Repository Structure

- `config/`: Industry source packs and focus rotation definitions.
- `db/`: PostgreSQL schema and future migrations.
- `dashboard/`: Next.js frontend using the App Router.
- `n8n/`: Workflow export foundation and prompt templates.

The dashboard is the public read surface. The workflow and database are the ingestion and persistence layers behind it.

## Contract Boundaries

### Industry Config

Each config file defines:

- an industry identifier and label
- a lookback window for source collection
- a focus rotation
- a set of RSS and Reddit sources tagged by relevant focus areas

Current naming in the JSON config is slightly different from relational naming in the database. That is intentional for now, but the mapping should remain explicit:

| Config field | Database target |
| --- | --- |
| `industry` | `industries.slug` |
| `label` | `industries.name` |
| `focus_rotation[].week` | `focus_rotation.week_number` |
| `focus_rotation[].slug` | `focus_rotation.slug` |
| `focus_rotation[].label` | `focus_rotation.label` |

The full config is also stored in `industries.config` as JSONB.

### Briefing Storage

The database stores two layers of output:

- `briefings`: one synthesized weekly briefing plus counts and metadata
- `pain_points`: the raw extracted pain points tied back to a briefing

The `briefings.briefing` JSONB column is intended to hold the full structured output of the second LLM pass.

### Dashboard Data

The current dashboard uses `dashboard/src/lib/sample-briefing.ts` as mocked data. That mock is a presentation scaffold, not yet the persisted briefing contract. When database wiring lands, the dashboard should read from PostgreSQL-backed briefing records rather than treat the mock shape as authoritative storage schema.
