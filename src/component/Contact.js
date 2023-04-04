import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <div id="contact" className="Contact">
            <h2>Contact Me</h2>
            <div className="ContactGroup">
                <div className="left">
                    <img src={require('../Images/Logo.png')} />
                    <p>If you liked my work and you need me.<br/>
                        let's work together to create something grate.</p>
                    <button className="DownloadCV">DOWNLOAD CV</button>
                    <text>© Gihan Chamika. All rights reserved. 2023</text>
                        
                </div>
                <div className="links">
                    <div clsaname = "Center">
                        <div className="Content">
                            <img src={require('../Images/mail.png')} />
                            <p>gihancjayasekara@gmail.com</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/behance.png')} />
                            <p>Gihan Chamika</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/phone.png')} />
                            <p>+94 76 5796 528</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="Content">
                            <img src={require('../Images/linkedin.png')} />
                            <p>Gihan Chamika</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/github.png')} />
                            <p>Gihan Chamika</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/facebook.png')} />
                            <p>Gihan Chamika</p>
                        </div>
                </div>
            </div>
            </div>
                   
            </div>
    )   
}

export default Contact