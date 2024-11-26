import React from "react";
import "./AboutProject.css";
import globe from "../../assets/globeIcon.png";
import hub from "../../assets/hubIcon.png";

export default function ScenarioProblem() {

  return (
    <div className="scenarioproblem-cnt">
      <h1>Supply & Demand</h1>
      <div className="scenario-row">
        <div className="scenario-item">
          <h4>Problem</h4>
          <div>
            Stock shortages shows the need for proactive inventory management{" "}
            <br /> Lead to revenue loss and patient access issues
          </div>
        </div>
        <div className="scenario-item">
          <div>
            <h4>Solution</h4>
            <div>
              Digital twin tech predicts demand and tracks it in real-time{" "}
              <br /> Prevent stockouts by forecasting gaps and adjusting
              manufacturing
            </div>
          </div>
        </div>
        <div className="scenario-item">
          <h4>Result</h4>
          <div>
            Save the company millions <br /> Maintain patient trust <br />{" "}
             Secure market share
          </div>
        </div>
      </div>
      <div className="scenario-example-row">
        <div className="scenario-example">
        <img className="scenario-img" src={globe} alt="globe icon"/>
          <h4>Managing Stock Blackouts and Supply Chain Risks</h4>
          <div>
            <strong>Influenced by:</strong> <br /> Geographical locations <br /> Socio-economic
            trends <br /> Demographic trends <br /> Local health trends
          </div>
        </div>
        <div className="scenario-example">
            <img className="scenario-img" src={hub} alt="hub icon"/>
          <h4>Manufacturing Alignment</h4>
          <div>
          Diverse production capabilities must synchronise <br/>  <strong>Respond to: </strong><br/> Evolving patient needs <br/> Evolving market conditions
          </div>
        </div>
      </div>
    </div>
  );
}
