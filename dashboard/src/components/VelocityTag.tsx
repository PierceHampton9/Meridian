import type { Velocity } from "@/lib/sample-briefing";

type VelocityTagProps = {
  velocity: Velocity;
};

const labelMap: Record<Velocity, string> = {
  growing: "Growing",
  stable: "Stable",
  "long-standing": "Long-standing",
};

const pillClass: Record<Velocity, string> = {
  growing: "pill pill-grow",
  stable: "pill pill-flat",
  "long-standing": "pill pill-flat",
};

export function VelocityTag({ velocity }: VelocityTagProps) {
  return <span className={pillClass[velocity]}>{labelMap[velocity]}</span>;
}
