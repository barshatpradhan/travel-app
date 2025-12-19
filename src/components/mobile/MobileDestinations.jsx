
import React, { useState } from 'react';
import DestinationCardMobile from './DestinationCardMobile.jsx';

const tabs = ['All', 'Recommended', 'Popular', 'Rating', 'Map'];

const DESTS = [
  { id: 1, title: 'Darjeeling', location: 'West Bengal, India', img: '../../assets/Toy.webp' },
  { id: 2, title: 'Manali', location: 'Himachal, India', img: '../../assets/Toy.webp' },
  { id: 3, title: 'Goa', location: 'Goa, India', img: '../../assets/Toy.webp' },
  { id: 4, title: 'Ooty', location: 'Tamil Nadu, India', img: '../../assets/Toy.webp' },
];

export default function MobileDestinations() {
  const [active, setActive] = useState('All');

  return (
    <section className="m-dest-section">
      <div className="m-dest-header">
        <h2 className="m-dest-title-section">Offers</h2>
      </div>

      <div className="m-dest-tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={`m-dest-tab ${t === active ? 'active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="m-dest-scroll">
        {DESTS.map((d) => (
          <DestinationCardMobile
            key={d.id}
            title={d.title}
            location={d.location}
            img={d.img}
          />
        ))}
      </div>
    </section>
  );
}
