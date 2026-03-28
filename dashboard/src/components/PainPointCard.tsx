import type { PainPoint } from "@/lib/sample-briefing";
import { SignalStrength } from "@/components/SignalStrength";
import { VelocityTag } from "@/components/VelocityTag";

type PainPointCardProps = {
  painPoint: PainPoint;
  index: number;
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
          <SignalStrength score={painPoint.signalStrength} />
        </div>
        <div className="pain-meta-row">
          <span className="pain-who">{painPoint.whoFeelsIt}</span>
          <VelocityTag velocity={painPoint.velocity} />
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
