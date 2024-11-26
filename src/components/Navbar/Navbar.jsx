import React from "react";
import "./Navbar.css";
import lillyLogo from "../../assets/lillyLogo.png";

export default function Navbar() {

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (!element) return; 

    const isMobile = window.innerWidth < 768; 
    const offset = isMobile ? 180 : 100; 
    element.scrollIntoView({ behavior: "smooth" });
    const elementTop = element.offsetTop;
    window.scrollTo({ top: elementTop - offset, behavior: "smooth" });
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
