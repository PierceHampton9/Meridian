import type { Idea } from "@/lib/sample-briefing";

type IdeaCardProps = {
  idea: Idea;
};

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <div className="starting-item">
      <p className="starting-item-label">Starting Point</p>
      <h3>{idea.title}</h3>
      <p className="starting-item-body">{idea.summary}</p>
      <ul className="starting-meta">
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
  );
}
