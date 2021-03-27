import React from 'react';
import './topbar.css';
import {StudentLink} from './studentElement';

const Topbar = () => {
    return (
        <>
        <div className = "bar">

        <h1 className = "title">ActiveLearn</h1>
        <span><img class = "logo1" src="learnLogo2.png" alt="logo"></img></span>
        <div className = "topBarIntroText">Classroom Engagement and Interactivity Simplified</div>
        <br></br><br></br>
        <div class = "topBarParagraphText">Got a number one victory royale
                                        Yeah fortnite we bout to get down (get down)
                                        Ten kills on the board right now
                                        Just wiped out tomato town
                                        My friends just go down
                                        I’ve revived him now we’re heading south bound</div>
        <StudentLink class="student" to="/join">I'm a Student</StudentLink>
        <StudentLink class = "teacher" to="/dashboard">I'm a Teacher</StudentLink>
        
        
        </div> 
        
        </>
    )
}

export default Topbar;
