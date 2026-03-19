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
      <div className="rabbit-inner">
        <div>
          <p className="sec-label">The Rabbit Hole</p>
          <h2 className="rabbit-title">
            Sources worth <em>chasing</em>
          </h2>
          <ul className="rabbit-list">
            {rabbitHole.sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </div>
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
    </section>
  );
}
