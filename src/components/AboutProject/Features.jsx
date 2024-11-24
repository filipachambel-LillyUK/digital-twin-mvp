import React from "react";
import "./AboutProject.css";
import image1 from "../../assets/image 1.png";
export default function Features() {
  return (
    <div className="features-cnt">
      <div>
        <h1>Features</h1>
        <div className="features-body">
          <img src={image1} alt="digital twin" />
          <div className="features-text-cnt">
            <div className="features-body-text">
              <h4>Features</h4>
              <p>• Intuitive and User-Centric Interface​</p>
              <p> • Advanced Scenario Simulation​s</p>
              <p>• Predictive Demand Planning​ </p>
              <p>• Dynamic Supply Chain Feedback Loop​</p>
              <p> • Automate exception flagging and handling</p>
              <p>• Intelligent Inventory Optimization​</p>
              <p>• Comprehensive Market Trend Analysis inc. Sales​</p>
              <p>• Forecast stock depletion risk​ </p>
              <p>• Automated Alerts and Notifications</p>
            </div>
            <div className="features-body-text">
              <h4>Outcomes</h4>
              <p>• Streamlined Communication Channels​​</p>
              <p> • Optimized Resource Allocation​</p>
              <p>• Minimized Inventory Waste​</p>
              <p>• Enhanced Visibility​​</p>
              <p> • Dynamic Risk Mitigation​</p>
              <p>• Improved Operational Efficiency​​</p>
              <p>• Room for future growth​</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
