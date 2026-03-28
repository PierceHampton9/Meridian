type SignalStrengthProps = {
  score: number;
};

export function SignalStrength({ score }: SignalStrengthProps) {
  return (
    <span className="pain-signal" aria-label={`Signal strength ${score} out of 10`}>
      {score}<sub>/10</sub>
    </span>
  );
}
