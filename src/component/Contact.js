import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <div className="Contact">
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
                            <p>Email address</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/phone.png')} />
                            <p>Email address</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="Content">
                            <img src={require('../Images/mail.png')} />
                            <p>gihancjayasekara@gmail.com</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/behance.png')} />
                            <p>Email address</p>
                        </div>
                        <div className="Content">
                            <img src={require('../Images/phone.png')} />
                            <p>Email address</p>
                        </div>
                </div>
            </div>
            </div>
                   
            </div>
    )   
}

export default Contact