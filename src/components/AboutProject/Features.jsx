import React from "react";
import "./AboutProject.css";
import image1 from "../../assets/image 1.png";
export default function Features() {
  return (
    <div className="features-cnt">
      <div>
        <h1>Operational Value</h1>
        <div className="features-body">
          {/* <img src={image1} alt="digital twin" /> */}
          <div className="features-text-cnt">
            <div className="features-body-text">
              <h4>Features</h4>
              <p>• Dynamic <strong>Supply Chain Feedback </strong>Loop​</p>
              <p>• Comprehensive <strong>Market Trend Analysis </strong>including sales​</p>
              <p> • Advanced <strong>Scenario Simulation​s</strong></p>
              <p>• Predictive <strong>Demand Planning​ </strong></p>
              <p>• Forecast <strong>stock depletion risk</strong>​ </p>
              <p>• Intelligent <strong>Inventory Optimization</strong>​</p>
              <p>• Intuitive and <strong>User-Centric </strong>Interface​</p>
            <p>• Automated <strong>Alerts and Notifications</strong></p>
            </div>
            <div className="features-body-text">
              <h4>Outcomes</h4>
              <p>• Streamlined <strong>Communication Channels​</strong>​</p>
              <p> • Optimized <strong>Resource Allocation​</strong></p>
              <p>• Minimized <strong>Inventory Waste</strong>​</p>
              <p>• Enhanced <strong>Visibility</strong>​​</p>
              <p> • Dynamic <strong>Risk Mitigation</strong>​</p>
              <p>• Improved <strong>Operational Efficiency</strong>​​</p>
              <p>• Room for <strong>Future Growth</strong>​</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
