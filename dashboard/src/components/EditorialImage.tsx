type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
};

export function EditorialImage({ src, alt, caption, source }: EditorialImageProps) {
  return (
    <div className="editorial-image">
      <figure>
        <div className="editorial-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" />
        </div>
        {(caption || source) && (
          <figcaption>
            {caption && <span className="caption-label">{caption}</span>}
            {source && <span className="caption-source">{source}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
