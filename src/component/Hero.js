import React from 'react';
import './Hero.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Hero = () =>{
    return(
            <div id="about" className="HeroGroup">
                <div className="HeroTitle">
                    <h2>Hello, I’m</h2>
                    <h1>Gihan Chamika</h1>
                    <p>I am a passionate UI/UX designer and developer. <br/>
                        I specialize in creating user-friendly interface <br/>
                        for web and mobile applications.</p><br/>
                       <p> As well as an expertise in post-production.<br/>
                        I find great joy in taking raw footage <br/>
                        and transforming it into compelling stories <br/>
                        through the art of video editing.</p>
                    <div className="HeroButton">
                        <button className="DownloadCV"><a href="https://drive.google.com/file/d/173P7R455N33IUZe6bftAFbPo2CE5hB9v/view?usp=share_link">DOWNLOAD CV</a></button>
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