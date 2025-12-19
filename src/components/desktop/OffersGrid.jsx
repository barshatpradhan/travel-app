
import React, { useState } from 'react';
import OfferCard from './OfferCard.jsx';


export default function OffersGrid() {
  const tabs = ['All Offers','Bank Offer','Flights','Hotels','Holidays','Trains','Cabs','Bus','Homestays','More'];
  const [activeTab, setActiveTab] = useState('All Offers');

  
  const items = [
    { id: 1, img: '../../assets/455954512.jpg', title: 'Grab Up to 25% OFF* ', tag: 'HOTELS', cta: 'BOOK NOW' },
    { id: 2, img: '../../assets/455954512.jpg', title: 'Weekend Sale — Flights', tag: 'FLIGHTS', cta: 'BOOK NOW' },
    { id: 3, img: '../../assets/455954512.jpg', title: 'Cabs Discount upto 20%', tag: 'CABS', cta: 'BOOK NOW' },
    { id: 4, img: '../../assets/455954512.jpg', title: 'Holiday Packages 15% off', tag: 'HOLIDAYS', cta: 'BOOK NOW' },
    { id: 5, img: '../../assets/455954512.jpg', title: 'Bank Offer: Extra Cashback', tag: 'BANK OFFER', cta: 'BOOK NOW' },
    { id: 6, img: '../../assets/455954512.jpg', title: 'Student fares available', tag: 'HOTELS', cta: 'BOOK NOW' },
    // { id: 7, img: '../../assets/455954512.jpg', title: 'Early Bird Discounts', tag: 'TRAVEL', cta: 'BOOK NOW' },
    // { id: 8, img: '../../assets/455954512.jpg', title: 'Limited Time Deal', tag: 'MORE', cta: 'BOOK NOW' },
  ];


  const visible = items; 

  return (
    <section className="offers-section destinations-main" aria-labelledby="offers-heading">
      <div className="offers-header container">
        <h2 id="offers-heading" className="offers-title">Offers</h2>

        <nav className="offers-tabs" aria-label="Offers categories">
          {tabs.map(t => (
            <button
              key={t}
              className={`offers-tab ${t === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </nav>
      </div>

      <div className="offers-card-wrap container">
        <div className="offers-grid">
          {visible.map(item => (
            <OfferCard
              key={item.id}
  img={item.img}
  tag={item.tag}
  title="Grab Up to 25% OFF* on Hotels"
  headline="UNLOCK BIG SAVINGS"
  code="HOLIDAY25"
  cta="BOOK NOW"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
