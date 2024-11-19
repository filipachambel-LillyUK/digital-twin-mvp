import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutProject from './components/AboutProject/AboutProject';
import DesignArchitecture from './components/DesignArchitecture/DesignArchitecture';
import ExecutionPlan from './components/ExecutionPlan/ExecutionPlan';
import ImpactGrowth from './components/ImpactGrowth/ImpactGrowth';
import Team from './components/Team/Team';

function App() {
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
