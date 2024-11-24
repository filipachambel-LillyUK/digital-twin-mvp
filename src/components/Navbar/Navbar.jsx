import React from "react";
import "./Navbar.css";
import lillyLogo from "../../assets/lillyLogo.png";

export default function Navbar() {

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
    const offset = element.offsetTop;
    window.scrollTo(0, offset - 100);
  }
  return (
    <nav className="dt-navbar-cnt">
      <img src={lillyLogo} alt="lilly Logo red" style={{ height: 100 }} />
      <div className="dt-navbar-content">
        <button onClick={()=> scrollToSection("about-project")}>About the Project</button>
        <button onClick={()=> scrollToSection("design-architecture")}>Design & Architecture</button>
        <button onClick={()=> scrollToSection("execution-plan")}>Execution Plan</button>
        <button onClick={()=> scrollToSection("impact-growth")}>Impact & Growth</button>
        <button onClick={()=> scrollToSection("team")}>About us</button>
      </div>
    </nav>
  );
}
