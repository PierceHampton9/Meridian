import { sampleBriefing } from "@/lib/sample-briefing";

export default function RawPage() {
  return (
    <>
      <div className="page-wrap">
        <p className="page-eyebrow">Raw Mode</p>
        <h1 className="page-title">The evidence trail without synthesis.</h1>
        <p className="page-body">
          This page shows extracted pain points and the source trail only, without the
          business-idea framing.
        </p>
      </div>

      <hr className="rule" />

      <div style={{ padding: "0 36px" }}>
        <div className="raw-items">
          {sampleBriefing.painPoints.map((painPoint) => (
            <article className="raw-item" key={painPoint.id}>
              <div className="raw-item-meta">
                <span className="raw-item-who">{painPoint.whoFeelsIt}</span>
                <span className="pain-num" style={{ fontSize: "24px" }}>
                  {painPoint.signalStrength}<sub>/10</sub>
                </span>
              </div>
              <h2>{painPoint.title}</h2>
              <p className="raw-item-body">{painPoint.summary}</p>
              <ul className="evidence">
                {painPoint.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
