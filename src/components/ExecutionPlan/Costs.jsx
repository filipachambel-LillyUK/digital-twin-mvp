import React from "react";
import "./ExecutionPlan.css";
import initialCosts from "../../images/initialCosts.png";
import ongoingCosts from "../../images/ongoingCosts.png";

export default function Costs() {
  return (
    <div className="costs-cnt">
      <div className="costs-cnt-item">
        <h1>Initial Development Cost</h1>
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
