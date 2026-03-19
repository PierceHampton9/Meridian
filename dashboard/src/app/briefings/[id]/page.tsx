import { IdeaCard } from "@/components/IdeaCard";
import { PainPointCard } from "@/components/PainPointCard";
import { RabbitHole } from "@/components/RabbitHole";
import { sampleBriefing } from "@/lib/sample-briefing";

type BriefingDetailPageProps = {
  params: {
    id: string;
  };
};

export default function BriefingDetailPage({ params }: BriefingDetailPageProps) {
  const { id } = params;

  return (
    <>
      <div className="issue-header">
        <p className="issue-meta">
          <span>{sampleBriefing.focusLabel}</span>
          <span>{sampleBriefing.publishedAt}</span>
          <span>Route: {id}</span>
        </p>
        <h1 className="issue-headline">
          {sampleBriefing.title.replace(/\.$/, "").split(" ").slice(0, -1).join(" ")}{" "}
          <em>{sampleBriefing.title.replace(/\.$/, "").split(" ").pop()}.</em>
        </h1>
      </div>

      <hr className="rule-heavy" />

      <section style={{ padding: "48px 36px 0" }}>
        <div className="detail-blocks">
          <div className="detail-block">
            <p className="sec-label">Industry Pulse</p>
            <p className="detail-block-body">{sampleBriefing.industryPulse}</p>
          </div>
          <div className="detail-block">
            <p className="sec-label">Your Lens</p>
            <p className="detail-block-body">{sampleBriefing.yourLens}</p>
          </div>
        </div>
      </section>

      <section className="pain-section">
        <p className="sec-label">Pain Points</p>
        <h2 className="pain-title">Where it hurts</h2>
        <div className="pain-grid">
          {sampleBriefing.painPoints.map((painPoint) => (
            <PainPointCard key={painPoint.id} painPoint={painPoint} />
          ))}
        </div>
      </section>

      <section className="starting-section">
        <div className="starting-inner">
          <p className="sec-label">Starting Points</p>
          <h2 className="starting-title">Where to begin</h2>
          <div className="starting-grid">
            {sampleBriefing.ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </div>
      </section>

      <RabbitHole rabbitHole={sampleBriefing.rabbitHole} />
    </>
  );
}
