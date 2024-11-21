import React from 'react';
import './ExecutionPlan.css';
import stakeholdersDiagram from '../../images/stakeholders.png';

export default function Stakeholders() {
    return(
        <div className="stakeholder-cnt">
            <div className='costs-cnt-item'>
        <h1>Key Stakeholders</h1>
        <img className="costs-img-cnt" src={stakeholdersDiagram} alt="stakeholders diagram" />
        </div>
        </div>
    )
}