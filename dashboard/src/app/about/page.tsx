export default function AboutPage() {
  return (
    <section className="about-grid">
      <div>
        <div className="eyebrow">About Meridian</div>
        <h1 className="page-title">A workflow for finding recurring professional pain.</h1>
      </div>
      <div className="section-stack">
        <div className="section-block">
          <div className="section-label">What it is</div>
          <p className="about-copy">
            Meridian is a human-steered workflow that gathers recent industry sources, extracts
            recurring pain points, and turns them into a weekly public briefing.
          </p>
        </div>
        <div className="section-block">
          <div className="section-label">Why this scaffold exists</div>
          <p className="about-copy">
            This dashboard slice establishes the routes, layout, and visual voice before wiring in
            PostgreSQL or the n8n workflow. The current content is intentionally mocked.
          </p>
        </div>
      </div>
    </section>
  );
}
