import React from 'react';
import './Team.css';
import filipa from '../../assets/profile/filipaProfile.png';
import profile from '../../assets/profile/nextProfile.png';
import alicia from '../../assets/profile/aliciaProfile.png';
import esha from '../../assets/profile/eshaProfile.png';
import lucie from '../../assets/profile/lucieProfile.png';
import jack from '../../assets/profile/jackProfile.png';
import yaro from "../../assets/profile/yaroProfile.png";

export default function Team() {
    return(
        <div id="team" className="team-cnt">
            <h1>Meet the Team</h1>
            <h2 className='team-name'><span>AI</span>liance Insp<span>AI</span>re</h2>
            <h4>Working together to inspire solutions</h4>
            <div className='team-body'>
            <div className="profile-card">
                <img src={alicia} alt="alicia profile"/>
                <div className='profile-body'>
                <h4>Alicia Koo</h4>
                <p>Marketing <br/> ​Dermatology & Rheumatology</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={esha} alt="esha profile"/>
                <div className='profile-body'>
                <h4>Esha Mandavia</h4>
                <p>Marketing <br/> Cardiometabolic Health</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={filipa} alt="filipa profile"/>
                <div className='profile-body'>
                <h4>Filipa Chambel</h4>
                <p>Software Engineer<br/> Global Medical Affairs​​</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={jack} alt="jack profile"/>
                <div className='profile-body'>
                <h4>Jack Stafford</h4>
                <p>Procurement</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={lucie} alt="lucie profile"/>
                <div className='profile-body'>
                <h4>Lucie Crellin</h4>
                <p>Patient Support</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={yaro} alt="yaro profile"/>
                <div className='profile-body'>
                <h4>Yaroslav Kraynik</h4>
                <p>Computational Neuroscience</p>
                </div>
            </div>
            </div>
        </div>
    )
}