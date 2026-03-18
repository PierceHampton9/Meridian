type SignalStrengthProps = {
  score: number;
};

export function SignalStrength({ score }: SignalStrengthProps) {
  return (
    <div className="signal-strength" aria-label={`Signal strength ${score} out of 10`}>
      <strong>{score}</strong>
      <span>/10 signal</span>
    </div>
  );
}
