import type { PainPoint } from "@/lib/sample-briefing";

type PainPointCardProps = {
  painPoint: PainPoint;
  index: number;
};

const velocityLabels: Record<string, string> = {
  growing: "Growing",
  stable: "Stable",
  "long-standing": "Long-standing",
};

export function PainPointCard({ painPoint, index }: PainPointCardProps) {
  return (
    <article className="numbered-article">
      <span className="article-number friction">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="article-content">
        <div className="pain-title-row">
          <h3>{painPoint.title}</h3>
          <span className="pain-signal" aria-label={`Signal strength ${painPoint.signalStrength} out of 10`}>
            {painPoint.signalStrength}<sub>/10</sub>
          </span>
        </div>
        <div className="pain-meta-row">
          <span className="pain-who">{painPoint.whoFeelsIt}</span>
          <span className={`pain-velocity ${painPoint.velocity}`}>
            {velocityLabels[painPoint.velocity]}
          </span>
        </div>
        <p>{painPoint.summary}</p>
        <ul className="pain-evidence">
          {painPoint.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
