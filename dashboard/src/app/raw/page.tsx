import { SignalStrength } from "@/components/SignalStrength";
import { VelocityTag } from "@/components/VelocityTag";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function RawPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-eyebrow">Raw Mode</p>
        <h1 className="page-title">The evidence trail without synthesis.</h1>
        <p className="page-body">
          This page shows extracted pain points and the source trail only, without the
          business-idea framing.
        </p>
      </div>

      <div className="raw-items">
        {sampleBriefing.painPoints.map((painPoint) => (
          <article className="raw-item" key={painPoint.id}>
            <div className="raw-item-top">
              <span className="raw-item-who">{painPoint.whoFeelsIt}</span>
              <div className="raw-item-right">
                <VelocityTag velocity={painPoint.velocity} />
                <SignalStrength score={painPoint.signalStrength} />
              </div>
            </div>
            <h2>{painPoint.title}</h2>
            <p className="raw-item-body">{painPoint.summary}</p>
            <ul className="pain-evidence">
              {painPoint.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
