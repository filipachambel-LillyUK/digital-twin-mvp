import React, { useState } from "react";
import SysArchDiagram from "../../assets/AzureTwinsSystemArchitecture.png";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import "./DesignArchitecture.css";

export default function SystemArchitecture() {
  const architectureData = {
    data: {
      label: "Data",
      text: "Internal and external data sources like SAP, IoT, and APIs provide real-time, historical, and forecasted data.",
    },
    dataIngestion: {
      label: "Data Ingestion",
      text: "Data is ingested via Azure Functions, Event Hubs, and Data Factory. Batch data from SAP through Azure Data Factory. Real-time IoT telemetry via IoT Hub integrates with Digital Twins. Event Hubs handles scalable streaming for high-throughput ingestion.",
    },
      storage: {
      label: "Storage",
      text: "Azure Blob Storage temporarily or permanently stores ingested data, integrating seamlessly with Synapse Analytics for scalable data analysis and long-term storage needs.",
    },
    dataProcessing: {
      label: "Data Processing",
      text: 'Synapse Analytics processes data and powers simulations. Azure Machine Learning forecasts disruptions, trains models, and simulates "what-if" scenarios for supply chain optimisation.',
    },

    digitalTwinCore: {
      label: "Digital Twin Core",
      text: "Azure Digital Twins models supply chain nodes, synchronizing real-world data to simulate disruptions, evaluate impacts, and update digital replicas using machine learning models.",
    },

    alerts: {
      label: "Alerts",
      text: "Logic Apps automates workflows for flagged exceptions. Notification Hubs sends push updates to stakeholders. Microsoft Teams posts alerts for disruptions or demand spikes directly into channels.",
    },
    visualisation: {
      label: "Visualisation",
      text: "Azure Maps visualizes supply chain nodes, flags issues, and maps disruptions. Power BI displays KPIs, trends, and simulation insights, integrating real-time updates with Synapse and Azure Maps.",
    },

    monitoring: {
      label: "Monitoring",
      text: "Application Insights and Log Analytics Workspace monitor system performance and logs, ensuring wide observability and reliability of system applications and processes.",
    },
  };

  const [openTooltip, setOpenTooltip] = useState(null);

  const handleTooltipClose = () => {
    setOpenTooltip(null);
  };

  const handleTooltipOpen = (tooltip) => {
    setOpenTooltip((prev) => (prev === tooltip ? null : tooltip));
  };

  return (
    <div className="sys-arch-cnt">
      <h1>System Architecture Proposal</h1>
      <div>
        <img
          src={SysArchDiagram}
          alt="system architecture diagram"
          style={{ width: "100%" }}
        />
      </div>
      <div className="sysarch-btn-row">
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div className="sysarch-btn-row">
            {Object.keys(architectureData).map((key) => (
              <Tooltip
                key={key}
                open={openTooltip === key}
                onClose={handleTooltipClose}
                disableHoverListener
                disableTouchListener
                slotProps={{
                  popper: {
                    disablePortal: true,
                  },
                }}
                title={architectureData[key].text}
              >
                <button onClick={() => handleTooltipOpen(key)}>
                  {architectureData[key].label}
                </button>
              </Tooltip>
            ))}
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}
