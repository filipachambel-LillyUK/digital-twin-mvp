import React from "react";
import "./ImpactGrowth.css";
import roiDiagram from "../../assets/roi.png";
import roiFormula from "../../assets/roiFormula.png";

export default function ROIBenefits() {
  return (
    <div className="roi-benefits-cnt">
      <div>
        <img className="roi-img-formula" src={roiFormula} alt="roi Formula"/>
        </div>
        <div>
        <img className="roi-img-diagram" src={roiDiagram} alt="roi Diagram"/>
        </div>
    </div>
  );
}
