import React from 'react';
import './Education.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>


const Education = () =>{
    return(
        <div id="education" className="EducationGrup">
            <h2>Education</h2>        
            <div className="EducationContent">
                <div className="line"/> 
                <text className="text1">2005</text>
                <text className="text2">2015</text>
                <text className="text3">2018</text>
                <text className="text4">2020</text>
                <text className="text5">Present</text>
            </div>

            <div data-aos="fade-right"  className="OlSchool">
                <div className="OlLine"/>
                <text className="text1">I studied at Sri Sangamiththa M.V Ragama,<br/>
                                        faced Ordinary Level Examination in 2015.<br/>
                                        I achieved 3”A”s, 4”B”s, 1”C” and 1”S”.</text>
                
            </div>
            <div data-aos="fade-right"  className="Esoft">
                <div className="EsostLine"/>
                <text className="text2">Completed “Diploma in ICT” in<br/>
                                        “E-soft metro campus” in Ja-ela.<br/></text>

            </div>
            <div data-aos="fade-right"  className="AlSchool">
                <div className="AlSchoolLine"/>
                <text className="text3">I studied at <br/>
                                        Sri Pangnananda National Collage Raddoluwa,<br/>
                                        faced Advance Level Examination in 2018.<br/>
                                        I achieved 3”B”s.<br/><br/></text>

            </div>
            <div data-aos="fade-right"  className="Uni">
                <div className="UniLine"/>
                <text className="text4">I,m studing at University of <br/>
                                        Sri Jayewardhenapura, focusing 
                                        on Multimedia technilogy.</text>

            </div>
        </div>
    )
}

export default Education