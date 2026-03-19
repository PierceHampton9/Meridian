import Link from "next/link";
import { IdeaCard } from "@/components/IdeaCard";
import { PainPointCard } from "@/components/PainPointCard";
import { RabbitHole } from "@/components/RabbitHole";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function Home() {
  const titleWords = sampleBriefing.title.replace(/\.$/, "").split(" ");
  const titleLast = titleWords.pop();
  const titleMain = titleWords.join(" ");

  return (
    <>
      <div className="issue-header">
        <p className="issue-meta">
          <span>{sampleBriefing.focusLabel}</span>
          <span>{sampleBriefing.publishedAt}</span>
          <span>{sampleBriefing.sourceCount} Sources</span>
        </p>
        <h1 className="issue-headline">
          {titleMain} <em>{titleLast}.</em>
        </h1>
        <p className="issue-dek">{sampleBriefing.intro}</p>
        <div className="issue-actions">
          <Link className="btn-sm btn-sm-fill" href="#briefing-body">
            Read below
          </Link>
          <Link className="btn-sm btn-sm-outline" href="/raw">
            Raw evidence
          </Link>
        </div>
      </div>

      <hr className="rule-heavy" />

      <section className="pulse" id="briefing-body">
        <div>
          <p className="sec-label">Industry Pulse</p>
          <h2 className="pulse-title">What the signal says this week</h2>
          <p className="pulse-copy">{sampleBriefing.industryPulse}</p>
        </div>
        <aside className="lens">
          <p className="lens-label">Your Lens</p>
          <p>{sampleBriefing.yourLens}</p>
        </aside>
      </section>

      <hr className="rule" />

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
