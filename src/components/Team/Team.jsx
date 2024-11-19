import React from 'react';
import './Team.css';
import filipa from '../../images/profile/filipaProfile.png';

export default function Team() {
    return(
        <div className="team-cnt">
            <h1>Meet the Team</h1>
            <div className='team-body'>
            <div className="profile-card">
                <img src={filipa} alt=""/>
                <p className="legend">Alicia Koo</p>
            </div>
            <div className="profile-card">
                <img src={filipa} alt=""/>
                <p className="legend">Esha Mandavia</p>
            </div>
            <div className="profile-card">
                <img src={filipa} alt="filipa profile"/>
                <div className='profile-body'>
                <h4>Filipa Chambel</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={filipa} alt=""/>
                <p className="legend">Jack Stafford</p>
            </div>
            <div className="profile-card">
                <img src={filipa} alt=""/>
                <p className="legend">Lucie Crellin</p>
            </div>
            <div className="profile-card">
                <img src={filipa} alt=""/>
                <p className="legend">Yaroslav Kraynik</p>
            </div>
            </div>
        </div>
    )
}