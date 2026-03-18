import { SignalStrength } from "@/components/SignalStrength";
import { VelocityTag } from "@/components/VelocityTag";
import type { PainPoint } from "@/lib/sample-briefing";

type PainPointCardProps = {
  painPoint: PainPoint;
};

export function PainPointCard({ painPoint }: PainPointCardProps) {
  const cardTone =
    painPoint.velocity === "growing"
      ? "card card-warm"
      : painPoint.signalStrength >= 8
        ? "card card-accent"
        : "card";

  return (
    <article className={cardTone}>
      <div className="card-header">
        <div>
          <div className="card-meta">Pain point</div>
          <h3 className="card-title">{painPoint.title}</h3>
        </div>
        <SignalStrength score={painPoint.signalStrength} />
      </div>
      <div className="card-meta">
        <span>{painPoint.whoFeelsIt}</span>
        <VelocityTag velocity={painPoint.velocity} />
      </div>
      <p className="card-body">{painPoint.summary}</p>
      <ul className="keyline-list">
        {painPoint.evidence.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
