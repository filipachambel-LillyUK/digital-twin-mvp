import React from 'react';
import './DesignArchitecture.css';
import AliceCarousel from 'react-alice-carousel';
import UiCard from './uiCard';
import mainDasboard1 from '../../assets/ui/mainDashboard_1.png';
import mainDasboard2 from '../../assets/ui/MainDashboard_2.png';
import simulationView from '../../assets/ui/SimulationView.png';
import globalView from '../../assets/ui/globalView.png';

export default function Design() {

    const items = [
        <UiCard title="Main Dashboard" uiImage={mainDasboard1}/>,
        <UiCard title="Main Dashboard" uiImage={mainDasboard2}/>,
        <UiCard title="Simulation View" uiImage={simulationView}/>,
        <UiCard title="Global View" uiImage={globalView}/>
    ];

    const responsive = {
        0: { items: 1 },
        500: { items: 4 },
    }
    return(
        <div className="design-cnt">
        <h1>UI/UX</h1>
        <AliceCarousel items={items} mouseTracking autoPlay infinite animationDuration={5000} disableButtonsControls disableDotsControls/>
        </div>
    )
}