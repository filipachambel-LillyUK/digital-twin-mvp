import Features from "./Features";
import Overview from "./Overview";
import ScenarioProblem from "./ScenarioProblem";
import './AboutProject.css'

export default function AboutProject() {
    return(
        <div id="about-project" className="about-project-cnt">
        <Overview/>
        <ScenarioProblem/>
        <Features/>
        </div>
    )
}