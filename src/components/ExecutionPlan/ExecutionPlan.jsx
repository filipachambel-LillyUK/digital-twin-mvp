import React from 'react';
import './ExecutionPlan.css';
import Timeline from './Timeline';
import Stakeholders from './Stakeholders';
import Costs from './Costs';

export default function ExecutionPlan() {
    return(
        <div id="execution-plan" className="execution-plan-cnt">
        <Timeline />
        <Stakeholders />
        <Costs />
        </div>
    )
}