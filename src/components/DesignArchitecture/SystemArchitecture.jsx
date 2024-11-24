import React from 'react';
import SysArchDiagram from '../../assets/AzureTwinsSystemArchitecture.png';
import plusIcon from '../../assets/plus_icon.png';
import Tooltip from '@mui/material/Tooltip';

import './DesignArchitecture.css';
export default function SystemArchitecture() {
    const architectureData = {
        data: "Internal Data: \n\n SAP: Provide real-time and historical data on production schedules, inventory, supply levels and demand forecasts. \n\n IoT devices: Provide real-time data of the GPS and sensors. \n\n External Data: Government APIs, weather APIs, economic feeds of the countries where the manufacturing plants reside. These include compliance data, manufacturing regulations, import/export policies; provide current and forecasted weather conditions to assess potential disruptions; economic data includes macroeconomic indicators, currency exchange rates and country-specific market conditions. \n\n Flow: Azure Functions retrieves data from APIs. The data is ingested via Azure Event Hubs for streaming data or Azure Data Factory for batch data. ",
        dataIngestion: "Azure Data Factory: ideal to retrieve data in batches. SAP systems might provide the data in batch mode (e.g: daily updates, scheduled extracts). \n\n Event Hubs: IoT Hub: as IoT devices in the manufacturing plant generate telemetry data in real time, IoT Hub is ideal to ingest, manage and monitor the devide data. Integrates seamlessly with Azure Digital Twins, allowing real-world IoT devices to synchronise state with their digital replicas. \n\n Azure Event Hubs: optimised for high throughput streaming, as it can handle massive ingestion of streams (scalability). ",
        storage: "Azure Blob Storage: All ingested data can be stored temporarily or permanently in Azure Blob Storage. integrates with Synapse Analytics enabling scalability.",
        dataProcessing: "Azure Synapse Analytics: acts as a centralised data processing and query engine at scale for running simulations and generating insights. Outputs structured datasets for machine learning. \n\n Azure Machine Learning: runs demand-supply simulations and forecasts based on the current data. \n\n Trains models using data from Synapse Analytics. \n\n Predicts potential disruptions, simulates various \"what-if\" scenarios (e.g.: plant shutdown, demand surge, raw material delays).",
        digitalTwinCore: "Azure Digital Twins: acts as the central hub for creating and maintaining a digital replica of the supply chain. Models manufactoring plants, logistics hubs, and distribution nodes. Uses real-time data from the processing layer to adjust the digital models. Allows for simulations to propagate through the twins environment, evaluating the impact of disruptions or decisions. \n\n Input: Data ingested through Data Factory, IoT Hub and Event Hubs is cleaned and processed for machine learning in Synapse. The models are trained in Azure Machine Learning. The AML models are sent to ADT to update and simulate future states. \n\n Output: alerts and insights are passed to the visualisation layer; enables collaboration by reflecting real-time states and forecasts for all stakeholders.",
        alerts: "Logic Apps: Automates workflows to handle exceptions flagged by simulations or real-time data. \n\n Scenario: automatically escalate a production halt to a manager if raw materials are delayed. Send updates to downstream logistics if a disruption is forecasted. \n\n Notification Hubs: send push notifications to stakeholders via email, SMS, or push notifications. \n\n Scenario Notify the supply chain manager of a predicted demand spike or material shortage. \n\n Microsoft Teams: posts alerts directly into the Teams Channels.",
        visualisation: "Azure Maps: provides a global view of manufacturing plants, logistic routes, and flagged issues. Real time flags indicating exceptions (e.g.: weather delays, inventory shortages); interactive map for drilling down into specific plants or supply chain nodes. \n\n Power BI: Displays KPIs, trends, and simulation results in user-firendly dashboards. Fetches aggregated data from Azure Synapse Analytics and simulation outputs. Integrates with Azure Digital Twins for real-time updates and with Azure Maps for mapping physical locations.",
        monitoring: "Application Insights: Monitor the applications. \n\n Log analytics Workspaces: Wide system logs."
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