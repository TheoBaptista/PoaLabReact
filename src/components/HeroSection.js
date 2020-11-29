import React from 'react';
import './HeroSection.css';
import '../App.css';
import video from '../videos/poalab.mp4';
import ReactLogo from '../images/logo.svg';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src= {video} autoPlay loop muted></video>
            <img src={ReactLogo} alt='logo'/>
        </div>
    );
}

export default HeroSection;
