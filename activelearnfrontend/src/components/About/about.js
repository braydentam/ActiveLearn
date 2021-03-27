import React from 'react'
import './about.css'
import {FcDocument,FcBullish,FcShare} from "react-icons/fc";

const About = () => {
    return (
        <>
        <div class="mid">
            <div class="box1"><FcDocument class = 'icon1'></FcDocument><br></br><strong>Document sharing:  </strong>High resolution screen sharing system that doesn't strain internet connection and the teacher can control pace of lesson</div>
            <div class="box2"><FcBullish class = 'icon2'></FcBullish><br></br><strong>Live quizzes:  </strong>Gives teachers a better understanding of student’s current level with interactive quizzes and graphs</div>
            <div class="box3"><FcShare class = 'icon3'></FcShare><br></br><strong>Collaborative Notes:  </strong>Provides the class the ability to work together alongside the teacher to grasp and enhance their knowledge</div>
        </div>
            
        </>
    )
}

export default About;
