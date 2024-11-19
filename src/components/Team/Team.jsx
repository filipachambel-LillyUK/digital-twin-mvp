import React from 'react';
import './Team.css';
import filipa from '../../images/profile/filipaProfile.png';
import profile from '../../images/profile/nextProfile.png';

export default function Team() {
    return(
        <div className="team-cnt">
            <h1>Meet the Team</h1>
            <div className='team-body'>
            <div className="profile-card">
                <img src={profile} alt="alicia profile"/>
                <div className='profile-body'>
                <h4>Alicia Koo</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={profile} alt="esha profile"/>
                <div className='profile-body'>
                <h4>Esha Mandavia</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={filipa} alt="filipa profile"/>
                <div className='profile-body'>
                <h4>Filipa Chambel</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={profile} alt=""/>
                <div className='profile-body'>
                <h4>Jack Stafford</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={profile} alt=""/>
                <div className='profile-body'>
                <h4>Lucie Crellin</h4>
                <p>text</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={profile} alt=""/>
                <div className='profile-body'>
                <h4>Yaroslav Kraynik</h4>
                <p>text</p>
                </div>
            </div>
            </div>
        </div>
    )
}