import Design from "./Design";
import SystemArchitecture from "./SystemArchitecture";
import "./DesignArchitecture.css";

export default function DesignArchitecture() {
    return(
    <div className="design-arch-cnt">
    <SystemArchitecture/>
    <Design/>
    </div>)
}