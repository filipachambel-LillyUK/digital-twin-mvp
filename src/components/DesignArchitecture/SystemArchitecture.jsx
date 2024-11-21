import React from 'react';
import SysArchDiagram from '../../images/AzureTwinsSystemArchitecture.png';
import plusIcon from '../../images/plus_icon.png';
import Tooltip from '@mui/material/Tooltip';

import './DesignArchitecture.css';
export default function SystemArchitecture() {
    const architectureData = {
        data: "hello",
        dataIngestion: "",
        storage: "",
        dataProcessing: "",
        digitalTwinCore: "",
        alerts: "",
        visualisation: "",
        monitoring: ""
    }

    return(
        <div className="sys-arch-cnt">
            <h1>System Architecture Proposal</h1>
        <div>
            <img src={SysArchDiagram} alt="system architecture diagram" style={{width: "100%"}}/>
        </div>
        <div className='sysarch-btn-row'>
            <Tooltip title={architectureData.data} placement='top'>
            <button>Data</button>
            </Tooltip>
            <Tooltip title={architectureData.dataIngestion} placement='top'>
            <button>Data Ingestion</button>
            </Tooltip>
            <Tooltip title={architectureData.storage} placement='top'>
            <button>Storage</button>
            </Tooltip>
            <Tooltip title={architectureData.dataProcessing} placement='top'>
            <button>Data Processing</button>
            </Tooltip>
            <Tooltip title={architectureData.digitalTwinCore} placement='top'>
            <button>Digital Twin Core</button>
            </Tooltip>
            <Tooltip title={architectureData.alerts} placement='top'>
            <button>Alerts</button>
            </Tooltip>
            <Tooltip title={architectureData.visualisation} placement='top'>
            <button>Visualisation</button>
            </Tooltip>
            <Tooltip title={architectureData.monitoring} placement='top'>
            <button>Monitoring</button>
            </Tooltip>
        </div>
        </div>
    )
}