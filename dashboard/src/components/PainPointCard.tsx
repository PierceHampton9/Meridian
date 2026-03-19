import { SignalStrength } from "@/components/SignalStrength";
import { VelocityTag } from "@/components/VelocityTag";
import type { PainPoint } from "@/lib/sample-briefing";

type PainPointCardProps = {
  painPoint: PainPoint;
};

export function PainPointCard({ painPoint }: PainPointCardProps) {
  return (
    <div className="pain-item">
      <div className="pain-top">
        <span className="pain-tag">Pain Point</span>
        <SignalStrength score={painPoint.signalStrength} />
      </div>
      <h3>{painPoint.title}</h3>
      <p className="pain-byline">{painPoint.whoFeelsIt}</p>
      <VelocityTag velocity={painPoint.velocity} />
      <p className="pain-body">{painPoint.summary}</p>
      <ul className="evidence">
        {painPoint.evidence.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
