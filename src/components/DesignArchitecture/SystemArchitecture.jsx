import React from 'react';
import SysArchDiagram from '../../images/AzureTwinsSystemArchitecture.png';

import './DesignArchitecture.css';
export default function SystemArchitecture() {
    return(
        <div className="sys-arch-cnt">
            <h1>System Architecture</h1>
        <div>
            <img src={SysArchDiagram} alt="system architecture diagram" style={{width: "100%"}}/>
        </div>
        </div>
    )
}