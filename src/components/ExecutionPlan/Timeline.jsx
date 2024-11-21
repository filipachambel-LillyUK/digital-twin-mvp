import React from "react";
import "./ExecutionPlan.css";
import timelineDiagram from "../../images/timeline.png";

export default function Timeline() {
  return (
    <div className="timeline-cnt">
      <div className="costs-cnt-item">
        <h1>Timeline</h1>
        <img
          className="costs-img-cnt"
          src={timelineDiagram}
          alt="timeline diagram"
        />
      </div>
    </div>
  );
}
