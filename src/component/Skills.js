import React, { useEffect } from 'react';
import './Skills.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Skills = () =>{

    useEffect(() => {
        Aos.init({duration: 1000});
    },[])

    return(
        
        <div  id="skill" className="Skills">
            <div className="SkillsTitle">
                <h2  data-aos="fade-down" >Skills</h2>
            </div>
            
            <div  className="SkillsContent">

                <div data-aos="fade-right" className="Rectangle">
                    <h3>Design</h3>
                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/figma.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Figma</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/adobe-xd.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Adobe XD</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/blender-3d.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>blender</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/unity.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Unity</h4>
                            <p>Beginner</p>  
                        </div>           
                    </div>
                </div>

                
                <div data-aos="fade-up" className="Rectangle">
                    <h3>Develop</h3>

                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/html.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>HTML</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/javascript.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>JavaScript</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/css3-.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>CSS</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/react.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>React</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>
                </div>


                <div data-aos="fade-left" className="Rectangle">
                    <h3>Post production</h3>

                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/premiere-pro.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Premier pro</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/adobe-xd.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>After effects</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/adobe-audition.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>Adobe Audition</h4>
                            <p>Advance</p>  
                        </div>           
                    </div>


                    <div className="RectangleGroup">
                        <div className="SkillList">      
                            <img src={require('../Images/davinci-resolve.png')}/>
                        </div>
                        <div className="SkillListTitle">
                            <h4>DaVinci Resolve</h4>
                            <p>Intermediate</p>  
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills