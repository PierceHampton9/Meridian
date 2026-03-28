type RabbitHoleProps = {
  rabbitHole: {
    sources: string[];
    communities: string[];
    relatedReading: string[];
  };
};

export function RabbitHole({ rabbitHole }: RabbitHoleProps) {
  return (
    <section className="rabbit-section">
      <div className="rabbit-header">
        <p className="rabbit-label">The Rabbit Hole</p>
        <h2 className="rabbit-title">
          Sources worth <em>chasing</em>
        </h2>
      </div>
      <div className="rabbit-body">
        <div className="rabbit-inner">
          <ul className="rabbit-source-list">
            {rabbitHole.sources.map((source) => (
              <li key={source}>
                <span className="signal-arrow" aria-hidden="true">&rarr;</span>
                <span>{source}</span>
              </li>
            ))}
          </ul>
          <div className="rabbit-aside">
            <div className="rabbit-box">
              <p className="rabbit-box-label">Communities</p>
              <ul>
                {rabbitHole.communities.map((community) => (
                  <li key={community}>{community}</li>
                ))}
              </ul>
            </div>
            <div className="rabbit-box">
              <p className="rabbit-box-label">Related Reading</p>
              <ul>
                {rabbitHole.relatedReading.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
