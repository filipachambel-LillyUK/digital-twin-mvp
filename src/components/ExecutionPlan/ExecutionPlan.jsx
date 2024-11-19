import React from 'react';
import './ExecutionPlan.css';
import Timeline from './Timeline';
import Stakeholders from './Stakeholders';
import Costs from './Costs';

export default function ExecutionPlan() {
    return(
        <div className="execution-plan-cnt">
        <Timeline />
        <Stakeholders />
        <Costs />
        </div>
    )
}