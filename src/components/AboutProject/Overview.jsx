import React from "react";
import "./AboutProject.css";
import demandiq from "../../images/logo_v2.png";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "./Card";
export default function Overview() {
  const items = [
  
        <Card title="The Challenge" content="Supply chain inefficiencies are causing delays and shortages.​ These issues directly impact patient care by preventing timely access to
        critical medicines.​"/>,
        <Card title="The Impact" content="Minimised shortages and disruptions in the supply chain.​​ Faster, more
        informed decisions for global teams.​​ Improved patient outcomes by
        ensuring timely access to medications."/>
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <div className="overview-cnt">
      <div>
        <img src={demandiq} alt="demandiq logo" />
        <div className="overview-content">
          <p>AI-powered Power BI dashboard for:​</p>
          <p>- Real-time insights into stock levels.​</p>
          <p>- Predictive analytics to anticipate demand.​</p>
          <p>- Global accessibility for proactive decision-making.​</p>​
        </div>
      </div>
      <div className="overview-cards">
      <AliceCarousel mouseTracking items={items} responsive={responsive} disableDotsControls disableButtonsControls autoPlay animationDuration={3000} infinite/>
      </div>
    </div>
  );
}
