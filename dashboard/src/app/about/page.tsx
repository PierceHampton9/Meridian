export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-eyebrow">About Meridian</p>
        <h1 className="page-title">A workflow for finding recurring professional pain.</h1>
        <p className="page-body">
          Meridian is a human-steered workflow that gathers recent industry sources, extracts
          recurring pain points, and turns them into a weekly public briefing.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-block">
          <p className="about-block-label">What it is</p>
          <h3>An open-source research workflow</h3>
          <p className="about-block-body">
            Meridian ingests sources (RSS feeds, Reddit), extracts recurring pain points via
            LLM synthesis, and presents the output in a self-hosted dashboard. The first
            industry config is journalism.
          </p>
        </div>
        <div className="about-block">
          <p className="about-block-label">Why this scaffold exists</p>
          <h3>Routes, layout, and visual voice first</h3>
          <p className="about-block-body">
            This dashboard slice establishes the routes, layout, and visual voice before wiring
            in PostgreSQL or the n8n workflow. The current content is intentionally mocked.
          </p>
        </div>
      </div>
    </>
  );
}
