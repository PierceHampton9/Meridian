import type { Velocity } from "@/lib/sample-briefing";

type VelocityTagProps = {
  velocity: Velocity;
};

const labelMap: Record<Velocity, string> = {
  growing: "Growing",
  stable: "Stable",
  "long-standing": "Long-standing",
};

export function VelocityTag({ velocity }: VelocityTagProps) {
  return <div className={`velocity velocity-${velocity}`}>{labelMap[velocity]}</div>;
}
