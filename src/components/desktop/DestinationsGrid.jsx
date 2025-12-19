import React, { useState } from 'react';
import DestinationCard from './DestinationCard.jsx';


const sample = '../../assets/Toy.webp';

export default function DestinationsGrid() {
  const tabs = ['All','Recommended','Popular','Rating','Map'];
  const [active, setActive] = useState('All');


  const data = Array.from({length:4}).map((_,i)=>({
    id:i,
    title: ['Darjeeling','Goa','Manali','Ooty','Leh','Kolkata','Mumbai','Pune'][i % 8],
    location: ['West Bengal, India','Goa, India','Himachal, India','Tamil Nadu, India','Ladakh, India','West Bengal, India','Maharashtra, India','Maharashtra, India'][i % 8],
    img: sample
  }));


  const visible = data;
  return (

     <div className="destinations-main ">
    <section className="dest-section 
    " aria-labelledby="dest-heading" style={{marginTop:24}}>
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginBottom:12}}>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <button className={`pill ${active==='All' ? 'active' : ''}`} onClick={()=>setActive('All')}>All</button>
          {tabs.slice(1).map(t => (
            <div key={t} style={{fontWeight:700, textAlign:'center', minWidth:120}}>{t}</div>
          ))}
        </div>
        <div className="text-muted">Map</div>
      </div>

      <div className="container">
        <div className="dest-grid">
          {visible.map(item => (
            <DestinationCard key={item.id} title={item.title} location={item.location} img={item.img}/>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
