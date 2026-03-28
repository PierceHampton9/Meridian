import type { Idea } from "@/lib/sample-briefing";

type IdeaCardProps = {
  idea: Idea;
  index: number;
};

export function IdeaCard({ idea, index }: IdeaCardProps) {
  return (
    <article className="numbered-article">
      <span className="article-number spark">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="article-content">
        <h3>{idea.title}</h3>
        <p>{idea.summary}</p>
        <ul className="idea-meta">
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
      </div>
    </article>
  );
}
