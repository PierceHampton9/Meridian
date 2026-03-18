import { sampleBriefing } from "@/lib/sample-briefing";

export default function RawPage() {
  return (
    <section className="section-stack">
      <div>
        <div className="eyebrow">Raw mode</div>
        <h1 className="page-title">The evidence trail without synthesis.</h1>
        <p className="raw-copy">
          This page is reserved for the extracted pain points and source trail only. For the
          scaffold, it renders the same sample pain points without the business-idea framing.
        </p>
      </div>

      {sampleBriefing.painPoints.map((painPoint) => (
        <article className="card" key={painPoint.id}>
          <div className="card-meta">
            <span>{painPoint.whoFeelsIt}</span>
            <span>{painPoint.signalStrength}/10 signal</span>
          </div>
          <h2 className="card-title">{painPoint.title}</h2>
          <p className="card-body">{painPoint.summary}</p>
          <ul className="source-list">
            {painPoint.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
