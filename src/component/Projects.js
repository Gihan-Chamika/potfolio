import React from 'react';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>



const Projects = () =>{

    

    return(
        <div id="project" className="Projects">
            <div className="ProjectTitle">
                <h2 data-aos="fade-down" >Projects</h2>
            </div>
            
            <div className="ProjectContent">

                <div data-aos="fade-left"  className="Rectangle">
                    <h3>Design</h3>
                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/FOODSHA.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>FoodSha App</h4>
                            <p>Wireframe & UI in figma</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/FOODSHA.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>FoodSha Web</h4>
                            <p>UI in figma</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/portfolio.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Portfolio</h4>
                            <p>UI in figma</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/hospital.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Medi Link</h4>
                            <p>UI in figma</p>  
                        </div>           
                    </div>
                </div>

                
                <div data-aos="fade-up"  className="Rectangle">
                    <h3>Develop</h3>

                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/FOODSHA.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>FoodSha Web</h4>
                            <p>Front-end using react</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/portfolio.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Portfolio</h4>
                            <p>Developed using react</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/hospital.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Medi Link</h4>
                            <p>Developing using react</p>  
                        </div>           
                    </div>



                </div>


                <div data-aos="fade-right" className="Rectangle">
                    <h3>Post production</h3>

                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/addiction.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Addiction</h4>
                            <p>Camera and edit</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/play.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Himidiriya</h4>
                            <p>Edit full event</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/after-effects.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Logo introduction</h4>
                            <p>Intro videos</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="ProjectList">      
                            <img src={require('../Images/play.png')}/>
                        </div>
                        <div className="ProjectListTitle">
                            <h4>Many more videos</h4>
                            <p>100+ videos for Fb pages<br/>
                                and events</p>  
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects