import React from 'react'
import './about.css'
import {FcReading,FcShare,FcQuestions} from "react-icons/fc";

const About = () => {
    return (
        <>
        <div class="mid">
            <div class="box1"><FcReading class = 'icon1'></FcReading><br></br>There was a meme of a person trolling their school with Among Us. I am doing that to my office.My coworkers were working at their desks and I went up behind one of them. </div>
            <div class="box2"><FcShare class = 'icon2'></FcShare><br></br>I yelled "When the imposter is sus!" and did the grin (from the meme) and hoped he would get it. He told me to go away so I slapped him and said "SUS! EJECT HIM!"</div>
            <div class="box3"><FcQuestions class = 'icon3'></FcQuestions><br></br> Everybody was looking at me from throughout the office. I said "You're all impostors!" If they don't get the reference they are imposters! </div>
        </div>
            
        </>
    )
}

export default About;
