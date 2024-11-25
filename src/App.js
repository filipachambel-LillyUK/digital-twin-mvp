import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutProject from './components/AboutProject/AboutProject';
import DesignArchitecture from './components/DesignArchitecture/DesignArchitecture';
import ExecutionPlan from './components/ExecutionPlan/ExecutionPlan';
import ImpactGrowth from './components/ImpactGrowth/ImpactGrowth';
import Team from './components/Team/Team';
import sendIcon from './assets/sendIcon.png';
import lillyLogo from "./assets/lillyLogo.png";
import demandiq from "./assets/logo_v2.png";

function App() {
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const correctCode = process.env.REACT_APP_CODE;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCode === correctCode) {
      setIsAuthorised(true);
    } else {
      setError("Please enter the code provided during the presentation.");
    }
  };

  if (!isAuthorised) {
    return (
      <div className="app-form">
        <img className="app-lilly-logo" src={lillyLogo} alt='lilly logo'/>
        <img className="app-demandiq-logo" src={demandiq} alt='demandiq'/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
          />
          <button type="submit">
            <img className="send-btn" src={sendIcon} alt='Send Button Icon'/>
          </button>
        </form>
        {error && <p className='app-error'>{error}</p>}
      </div>
    );
  }
  
  return (
    <div className="App">
      <Navbar />
      <AboutProject />
      <DesignArchitecture />
      <ExecutionPlan/>
      <ImpactGrowth/>
      <Team/>
    </div>
  );
}

export default App;
