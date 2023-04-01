import React from 'react';
import './Hero.css';

const Hero = () =>{
    return(
            <div className="HeroGroup">
                <div className="HeroTitle">
                    <h2>Hello, I’m</h2>
                    <h1>Gihan Chamika</h1>
                    <p>I am a passionate UI/UX designer and developer. <br/>
                        I specialize in creating user-friendly interface <br/>
                        for web and mobile applications.<br/>
                        <br/>
                        As well as an expertise in post-production.<br/>
                        I find great joy in taking raw footage <br/>
                        and transforming it into compelling stories <br/>
                        through the art of video editing.</p>
                    <div className="HeroButton">
                        <button className="DownloadCV">DOWNLOAD CV</button>
                    </div>
                </div>
                <div className="HeroImage">
                    <img src={require('../Images/i7.png')}/>
                    <div className="circle2"/>
                    <div className="circle1"/>
                   
                    
                </div>
            </div>
    )
}

export default Hero;