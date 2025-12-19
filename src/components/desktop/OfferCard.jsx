
import React from 'react';
import arrowImg from '../../assets/Vector 175.png';

export default function OfferCard({
  img,
  tag = 'HOTELS',
  headline = 'UNLOCK BIG SAVINGS',
  title = 'Grab Up to 25% OFF* on Hotels',
  code = 'HOLIDAY25',
  cta = 'BOOK NOW',
}) {
  return (
    <article className="offer-card-figma">
      
      {/* IMAGE SECTION */}
      <div className="offer-image-wrap">
        <img src={img} alt={title} />

        {/* top-right pill */}
        <span className="offer-tag">{tag}</span>

        {/* left-bottom text */}
        <div className="offer-overlay">
          <span className="offer-ribbon">{headline}</span>
          <h3>{title}</h3>

          <div className="offer-code">
            <span>use code</span>
            <strong>{code}</strong>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="offer-bottom">
        <button className="offer-cta">
          {cta}
          <img src={arrowImg} alt="arrow" />
        </button>
      </div>
    </article>
  );
}
