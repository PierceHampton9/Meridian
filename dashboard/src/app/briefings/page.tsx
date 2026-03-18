import Link from "next/link";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function BriefingsPage() {
  return (
    <section className="section-stack">
      <div>
        <div className="eyebrow">Archive</div>
        <h1 className="page-title">Briefings will live here once weekly runs are stored.</h1>
        <div className="list-meta">
          <span>1 demo entry</span>
          <span>PostgreSQL integration pending</span>
        </div>
      </div>

      <article className="archive-item">
        <div className="archive-link-row">
          <div>
            <div className="card-meta">{sampleBriefing.publishedAt}</div>
            <h2>{sampleBriefing.title}</h2>
          </div>
          <Link className="link-line" href={`/briefings/${sampleBriefing.id}`}>
            Open demo
          </Link>
        </div>
        <p className="section-copy">{sampleBriefing.industryPulse}</p>
      </article>
    </section>
  );
}
