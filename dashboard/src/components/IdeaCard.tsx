import type { Idea } from "@/lib/sample-briefing";

type IdeaCardProps = {
  idea: Idea;
};

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <article className="card">
      <div className="card-meta">Starting point</div>
      <h3 className="card-title">{idea.title}</h3>
      <p className="card-body">{idea.summary}</p>
      <ul className="keyline-list">
        <li>
          <strong>Pain point:</strong> {idea.linkedPainPoint}
        </li>
        <li>
          <strong>Who&apos;s trying:</strong> {idea.whoIsTrying}
        </li>
        <li>
          <strong>Angle:</strong> {idea.angle}
        </li>
      </ul>
    </article>
  );
}
