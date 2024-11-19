import ROIBenefits from "./ROIBenefits";
import ScalabilitySustainability from "./ScalabilitySustainability";
import './ImpactGrowth.css';
import SuccessStories from "./SuccessStories";

export default function ImpactGrowth() {
    return(
        <div className="impact-growth-cnt">
        <ROIBenefits />
        <ScalabilitySustainability />
        <SuccessStories />
        </div>
    )
}