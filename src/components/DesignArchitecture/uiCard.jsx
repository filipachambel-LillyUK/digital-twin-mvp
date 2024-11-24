import React from 'react';
import './DesignArchitecture.css';

export default function UiCard({title, uiImage}) {
    return (
        <div className="ui-card-cnt">
            <h4>{title}</h4>
            <img src={uiImage} alt="ui ux prototypes"/>
        </div>
    );
}