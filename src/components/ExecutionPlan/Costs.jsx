import React from "react";
import "./ExecutionPlan.css";
import initialCosts from "../../assets/initialCosts.png";
import ongoingCosts from "../../assets/ongoingCosts.png";

export default function Costs() {
  return (
    <div className="costs-cnt">
      <div className="costs-cnt-item">
        <h1>Development Cost</h1>
        <h4>(10-12 months)</h4>
        <img
          className="costs-img-cnt"
          src={initialCosts}
          alt="inital costs diagram"
        />
      </div>
      <div className="costs-cnt-item">
        <h1>Ongoing Operational Costs</h1>

        <img
          className="costs-img-cnt"
          src={ongoingCosts}
          alt="ongoing costs diagram"
        />
      </div>
    </div>
  );
}
