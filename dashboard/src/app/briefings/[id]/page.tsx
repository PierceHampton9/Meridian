import { EditorialImage } from "@/components/EditorialImage";
import { PainPointCard } from "@/components/PainPointCard";
import { IdeaCard } from "@/components/IdeaCard";
import { RabbitHole } from "@/components/RabbitHole";
import { sampleBriefing } from "@/lib/sample-briefing";

type BriefingDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BriefingDetailPage({ params }: BriefingDetailPageProps) {
  const { id } = await params;

  return (
    <>
      <div className="page-header">
        <p className="page-eyebrow">{sampleBriefing.focusLabel} &middot; {sampleBriefing.publishedAt} &middot; {id}</p>
        <h1 className="page-title">{sampleBriefing.title}</h1>
        <p className="page-body">{sampleBriefing.intro}</p>
      </div>

      {/* Editorial Image */}
      {sampleBriefing.imageUrl && (
        <EditorialImage
          src={sampleBriefing.imageUrl}
          alt={sampleBriefing.focusLabel}
          caption={sampleBriefing.focusLabel}
          source={`${sampleBriefing.sourceCount} sources // ${sampleBriefing.publishedAt}`}
        />
      )}

      {/* Pulse & Lens */}
      <div className="detail-grid">
        <div className="detail-block">
          <p className="detail-block-label">Industry Pulse</p>
          <p className="detail-block-body">{sampleBriefing.industryPulse}</p>
        </div>
        <div className="detail-block">
          <p className="detail-block-label">Your Lens</p>
          <p className="detail-block-body">{sampleBriefing.yourLens}</p>
        </div>
      </div>

      {/* Friction & Spark */}
      <div className="content-grid">
        <div className="content-column">
          <div className="content-column-header">
            <h2 className="content-column-title friction">The Friction</h2>
            <div className="content-column-icon friction" />
          </div>
          <div className="numbered-articles">
            {sampleBriefing.painPoints.map((painPoint, index) => (
              <PainPointCard key={painPoint.id} painPoint={painPoint} index={index} />
            ))}
          </div>
        </div>

        <div className="content-column">
          <div className="content-column-header">
            <h2 className="content-column-title spark">The Spark</h2>
            <div className="content-column-icon spark" />
          </div>
          <div className="numbered-articles">
            {sampleBriefing.ideas.map((idea, index) => (
              <IdeaCard key={idea.id} idea={idea} index={index} />
            ))}
          </div>
        </div>
      </div>

      <RabbitHole rabbitHole={sampleBriefing.rabbitHole} />
    </>
  );
}
