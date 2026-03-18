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
    <section className="section-stack">
      <div>
        <div className="eyebrow">Briefing detail</div>
        <h1 className="page-title">{sampleBriefing.title}</h1>
        <div className="detail-meta">
          <span>Route id: {id}</span>
          <span>{sampleBriefing.focusLabel}</span>
          <span>{sampleBriefing.publishedAt}</span>
        </div>
      </div>

      <section className="section-block">
        <div className="section-label">Industry pulse</div>
        <p className="section-copy">{sampleBriefing.industryPulse}</p>
      </section>

      <section className="section-block">
        <div className="section-label">Your lens</div>
        <p className="section-copy">{sampleBriefing.yourLens}</p>
      </section>

      <div>
        <div className="section-label">Pain points</div>
        <div className="card-grid">
          {sampleBriefing.painPoints.map((painPoint) => (
            <PainPointCard key={painPoint.id} painPoint={painPoint} />
          ))}
        </div>
      </div>

      <div>
        <div className="section-label">Starting points</div>
        <div className="card-grid">
          {sampleBriefing.ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>

      <RabbitHole rabbitHole={sampleBriefing.rabbitHole} />
    </section>
  );
}
