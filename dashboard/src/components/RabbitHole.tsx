type RabbitHoleProps = {
  rabbitHole: {
    sources: string[];
    communities: string[];
    relatedReading: string[];
  };
};

export function RabbitHole({ rabbitHole }: RabbitHoleProps) {
  return (
    <section className="section-block">
      <div className="section-label">The Rabbit Hole</div>
      <div className="detail-grid">
        <div>
          <h2 className="section-title">Sources worth chasing</h2>
          <ul className="source-list">
            {rabbitHole.sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </div>
        <div className="section-stack">
          <div>
            <div className="card-meta">Communities</div>
            <ul className="source-list">
              {rabbitHole.communities.map((community) => (
                <li key={community}>{community}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="card-meta">Related reading</div>
            <ul className="source-list">
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
