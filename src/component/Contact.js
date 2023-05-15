import React from 'react';
import './Contact.css';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>

const Contact = () =>{
    return(
        
        <div id="contact" className="Contact">
            <h2>Contact Me</h2>
            <div className="ContactGroup">
                <div className="left">
                    <img src={require('../Images/Logo.png')} />
                    <p>If you liked my work and you need me.<br/>
                        let's work together to create something grate.</p>
                    <button className="DownloadCV"><a href="https://drive.google.com/file/d/173P7R455N33IUZe6bftAFbPo2CE5hB9v/view?usp=share_link">DOWNLOAD CV</a></button>
                    <text>© Gihan Chamika. All rights reserved. 2023</text>
                        
                </div>
                <div className="links">
                    <div clsaname = "Center">
                        <div className="Content">
                            <img src={require('../Images/mail.png')} />
                            <p><a href="mailto:gihancjayasekara@gmail.com">gihancjayasekara@gmail.com</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/behance.png')} />
                            <p><a href="https://www.behance.net/gihancjayasek">Gihan Chamika</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/phone.png')} />
                            <p>+94 76 5796 528</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="Content">
                            <img src={require('../Images/linkedin.png')} />
                            <p><a href="https://www.linkedin.com/in/gihan-chamika-604311260">Gihan Chamika</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/github.png')} />
                            <p><a href="https://github.com/Gihan-Chamika">Gihan Chamika</a></p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/facebook.png')} />
                            <p><a href="https://www.facebook.com/gihan.chamika.79?mibextid=ZbWKwL">Gihan Chamika</a></p>
                        </div>
                </div>
            </div>
            </div>
                   
            </div>
    )   
}

export default Contact