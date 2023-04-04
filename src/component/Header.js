import React from 'react';
import './Header.css';
import './Header.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Header = () => {
    return (
        <div className="HeaderGroup">

            <div className="HeaderImage">
                <img src={require('../Images/Logo.png')} />
            </div>
            <div className="HeaderTitle">
               <ul className="list">
                    <li >ABOUT </li>
                    <li>SKILLS</li>
                    <li>EDUCATION</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            
        </div>
    )
}



export default Header;