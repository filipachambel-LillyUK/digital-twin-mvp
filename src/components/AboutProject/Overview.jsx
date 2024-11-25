import React from "react";
import "./AboutProject.css";
import demandiq from "../../assets/logo_v2.png";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "./Card";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
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
      <div className="overview-logo">
        <div className="overview-logo-container">
        <img src={demandiq} alt="demandiq logo" className="demandiq-logo"/>
        </div>
        <div className="overview-content">
          <p>AI-powered Power BI dashboard for:​</p>
          <p>- Real-time insights into stock levels.​</p>
          <p>- Predictive analytics to anticipate demand.​</p>
          <p>- Global accessibility for proactive decision-making.​</p>​
        </div>
      </div>
      <div className="overview-cards">
      <img src={image3} className="demandiq-img"/>
      <AliceCarousel mouseTracking items={items} responsive={responsive} disableDotsControls disableButtonsControls autoPlay animationDuration={3000} infinite/>
      </div>
    </div>
  );
}
