import Link from "next/link";
import { IdeaCard } from "@/components/IdeaCard";
import { PainPointCard } from "@/components/PainPointCard";
import { RabbitHole } from "@/components/RabbitHole";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function Home() {
  const titleWords = sampleBriefing.title.split(" ");
  const titleLast = titleWords.pop();
  const titleMain = titleWords.join(" ");

  return (
    <>
      <section className="cinema">
        <div className="cinema-stage">
          <div className="cinema-atmos" aria-hidden="true">
            <div className="cinema-dots" />

            <div className="bg-shape shape-circle-1" />
            <div className="bg-shape shape-circle-2" />
            <div className="bg-shape shape-rect-1" />
            <div className="bg-shape shape-line-h" />
            <div className="bg-shape shape-line-h2" />
            <div className="bg-shape shape-line-v" />

            <div className="text-frag tf-1">MERIDIAN</div>
            <div className="text-frag tf-2">2026</div>
            <div className="text-frag tf-3">47.6062</div>
            <div className="text-frag tf-4">{`001 — ingest\n002 — extract\n003 — synthesize\n004 — publish`}</div>
            <div className="text-frag tf-5">002.7</div>

            <div className="glow glow-1" />
            <div className="glow glow-2" />
            <div className="glow glow-3" />

            <div className="atmos-block ab-1" />
            <div className="atmos-block ab-2" />
            <div className="atmos-block ab-3" />
            <div className="atmos-block ab-4" />
            <div className="atmos-block ab-5" />
            <div className="atmos-block ab-6" />

            <div className="mark mark-1">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2 16 C8 4, 24 4, 30 16 C24 28, 8 28, 2 16Z" />
              </svg>
            </div>
            <div className="mark mark-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div className="mark mark-3">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M4 4 L24 24 M24 4 L4 24" />
                <rect x="6" y="6" width="16" height="16" rx="1" />
              </svg>
            </div>
            <div className="mark mark-4">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M0 10 Q10 0 20 10 Q30 20 40 10" />
              </svg>
            </div>

            <div className="crosshair ch-1" />
            <div className="crosshair ch-2" />
            <div className="crosshair ch-3" />

            <div className="scatter-dot sd-1" />
            <div className="scatter-dot sd-2" />
            <div className="scatter-dot sd-3" />
            <div className="scatter-dot sd-4" />
            <div className="scatter-dot sd-5" />
            <div className="scatter-dot sd-6" />
            <div className="scatter-dot sd-7" />

            <div className="edge-num en-1">SECTOR 001</div>
            <div className="edge-num en-2">53.5461&#176; N</div>
            <div className="edge-num en-3">&#8627;</div>

            <div className="noise-block">{`SRC  08  active\nPTS  14  extracted\nRUN  wk-03  tooling\nOUT  briefing.json`}</div>

            <div className="cinema-scanline" />
            <div className="cinema-vignette" />
          </div>

          <div className="cinema-content">
            <div className="cinema-label"><span>&#9679;</span> Latest briefing</div>
            <h1 className="cinema-title">
              {titleMain}{" "}
              <em>{titleLast}</em>
            </h1>
            <p className="cinema-desc">{sampleBriefing.intro}</p>
            <div className="cinema-cta">
              <Link className="cta-btn" href="/briefings/demo-briefing">Read Briefing</Link>
              <Link className="cta-link" href="/raw">Raw Evidence</Link>
            </div>
          </div>

          <div className="cinema-strip">
            <span>{sampleBriefing.focusLabel}</span>
            <span>{sampleBriefing.publishedAt}</span>
            <span>{sampleBriefing.sourceCount} sources</span>
          </div>
        </div>
      </section>

      <div className="below-cinema">
        <section className="content-grid">
          <div>
            <div className="section-label">Industry pulse</div>
            <h2 className="section-title">What the signal says this week</h2>
            <p className="section-body">{sampleBriefing.industryPulse}</p>
          </div>
          <div className="lens-aside">
            <div className="section-label">Your lens</div>
            <p className="section-body">{sampleBriefing.yourLens}</p>
          </div>
        </section>

        <section>
          <div className="section-label">Pain points</div>
          <div className="card-grid">
            {sampleBriefing.painPoints.map((painPoint) => (
              <PainPointCard key={painPoint.id} painPoint={painPoint} />
            ))}
          </div>
        </section>

        <section>
          <div className="section-label">Starting points</div>
          <div className="card-grid">
            {sampleBriefing.ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </section>

        <RabbitHole rabbitHole={sampleBriefing.rabbitHole} />
      </div>
    </>
  );
}
