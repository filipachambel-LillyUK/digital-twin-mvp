import React from 'react';
import './Team.css';
import filipa from '../../images/profile/filipaProfile.png';
import profile from '../../images/profile/nextProfile.png';
import alicia from '../../images/profile/aliciaProfile.png';
import esha from '../../images/profile/eshaProfile.png';
import lucie from '../../images/profile/lucieProfile.png';
import jack from '../../images/profile/jackProfile.png';

export default function Team() {
    return(
        <div id="team" className="team-cnt">
            <h1>Meet the Team</h1>
            <div className='team-body'>
            <div className="profile-card">
                <img src={alicia} alt="alicia profile"/>
                <div className='profile-body'>
                <h4>Alicia Koo</h4>
                <p>Marketing</p>
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
                <p>Software Engineer<br/> Global Medical Affairs​ <br/>Chatbot Space​</p>
                </div>
            </div>
            <div className="profile-card">
                <img src={jack} alt="jack profile"/>
                <div className='profile-body'>
                <h4>Jack Stafford</h4>
                <p>Procurement Associate</p>
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