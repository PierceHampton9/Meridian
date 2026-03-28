import Link from "next/link";
import { sampleBriefing } from "@/lib/sample-briefing";

export default function BriefingsPage() {
  return (
    <>
      <div className="page-header">
        <p className="page-eyebrow">Archive</p>
        <h1 className="page-title">Past briefings</h1>
        <p className="page-body">
          Briefings will live here once weekly runs are stored. For now, one demo entry.
        </p>
      </div>

      <div className="archive-list">
        <Link href={`/briefings/${sampleBriefing.id}`}>
          <article className="archive-item">
            <div>
              <p className="archive-item-meta">{sampleBriefing.publishedAt} &middot; {sampleBriefing.focusLabel}</p>
              <h2>{sampleBriefing.title}</h2>
              <p className="archive-item-body">{sampleBriefing.industryPulse}</p>
            </div>
            <span className="archive-link">Open &rarr;</span>
          </article>
        </Link>
      </div>
    </>
  );
}
