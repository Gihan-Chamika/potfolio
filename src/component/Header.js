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
                    <li><a href="#about">ABOUT</a> </li>
                    <li><a href="#skill">SKILLS</a></li>
                    <li><a href="#education">EDUCATION</a></li>
                    <li><a href="#project">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>

            {/* <script type="text/javascript">
                var marker = document.querySelector('#marker');
                var item = document.querySelectorAll('li');

                function indicator(e) 
                    marker.style.left = e.offsetLeft + "px";
                    marker.style.width = e.offsetwidth + "px";
                

                item.forEach(link => {
                    link.addEventListener('click' , (e) => {
                        indicator(e.target);
                    })
                })
            </script> */}
            
        </div>
        
    )
}



export default Header;