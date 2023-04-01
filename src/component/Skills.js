import React from 'react';
import './Skills.css'

const Skills = () =>{
    return(
        <div className="Skills">
            <div className="SkillsTitle">
                <h2>Skills</h2>
            </div>
            
            <div className="SkillsContent">

                <div className="Rectangle">
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

                
                <div className="Rectangle">
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


                <div className="Rectangle">
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