-- Meridian database schema
-- Target database: PostgreSQL

CREATE TABLE industries (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  config JSONB NOT NULL,
  current_focus_week INT NOT NULL DEFAULT 1 CHECK (current_focus_week > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE briefings (
  id SERIAL PRIMARY KEY,
  industry_id INT NOT NULL REFERENCES industries(id) ON DELETE CASCADE,
  focus_slug VARCHAR(50) NOT NULL,
  focus_label VARCHAR(100) NOT NULL,
  focus_was_custom BOOLEAN NOT NULL DEFAULT FALSE,
  user_context TEXT,
  week_number INT NOT NULL CHECK (week_number > 0),
  briefing JSONB NOT NULL,
  source_count INT CHECK (source_count IS NULL OR source_count >= 0),
  pain_point_count INT CHECK (pain_point_count IS NULL OR pain_point_count >= 0),
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE pain_points (
  id SERIAL PRIMARY KEY,
  briefing_id INT NOT NULL REFERENCES briefings(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  who_feels_it VARCHAR(200),
  evidence_quote TEXT,
  severity VARCHAR(10) CHECK (severity IN ('low', 'medium', 'high')),
  source_name VARCHAR(200),
  source_url TEXT,
  extracted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE focus_rotation (
  id SERIAL PRIMARY KEY,
  industry_id INT NOT NULL REFERENCES industries(id) ON DELETE CASCADE,
  week_number INT NOT NULL CHECK (week_number > 0),
  slug VARCHAR(50) NOT NULL,
  label VARCHAR(100) NOT NULL,
  UNIQUE (industry_id, week_number)
);

CREATE INDEX idx_briefings_industry_published_at
  ON briefings (industry_id, published_at DESC);

CREATE INDEX idx_pain_points_briefing_id
  ON pain_points (briefing_id);

CREATE INDEX idx_focus_rotation_industry_week
  ON focus_rotation (industry_id, week_number);
