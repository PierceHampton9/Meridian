import { EditorialImage } from "@/components/EditorialImage";
import { PainPointCard } from "@/components/PainPointCard";
import { IdeaCard } from "@/components/IdeaCard";
import { RabbitHole } from "@/components/RabbitHole";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-tags">
            <span className="hero-tag-industry">Journalism</span>
            <span className="hero-tag-dot" />
            <span>{sampleBriefing.focusLabel}</span>
          </div>

          <h1 className="hero-headline">{sampleBriefing.title}</h1>

          <p className="hero-description">{sampleBriefing.intro}</p>
        </div>

        <aside className="signals-sidebar">
          <h2 className="signals-title">This Week&apos;s Signals</h2>
          <ul className="signals-list">
            {sampleBriefing.signals.map((signal, i) => (
              <li key={i}>
                <span className="signal-arrow">&rarr;</span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <hr className="section-rule" />

      {/* Editorial Image */}
      {sampleBriefing.imageUrl && (
        <EditorialImage
          src={sampleBriefing.imageUrl}
          alt={sampleBriefing.focusLabel}
          caption={sampleBriefing.focusLabel}
          source={`${sampleBriefing.sourceCount} sources // ${sampleBriefing.publishedAt}`}
        />
      )}

      {/* Industry Pulse */}
      <section className="pulse-section">
        <div className="pulse-main">
          <p className="pulse-label">Industry Pulse</p>
          <h2 className="pulse-title">What the signal says this week</h2>
          <p className="pulse-copy">{sampleBriefing.industryPulse}</p>
        </div>
        <div className="lens-block">
          <p className="lens-label">Your Lens</p>
          <p className="lens-body">{sampleBriefing.yourLens}</p>
        </div>
      </section>

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
