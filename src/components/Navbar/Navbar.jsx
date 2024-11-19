import React from "react";
import "./Navbar.css";
import lillyLogo from "../../images/lillyLogo.png";

export default function Navbar() {
  return (
    <nav className="dt-navbar-cnt">
      <img src={lillyLogo} alt="lilly Logo red" style={{ height: 100 }} />
      <div className="dt-navbar-content">
        <button>About the Project</button>
        <button>Design & Architecture</button>
        <button>Execution Plan</button>
        <button>Impact & Growth</button>
        <button>About us</button>
      </div>
    </nav>
  );
}
