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
        <div class = "topBarParagraphText">Over the last year, everyone has learned to communicate over video conferencing systems. These systems were not built for education.
We want to augment these systems with something that enhances student-teacher engagement on any web conferencing system.
                                        </div>
        <StudentLink class="student" to="/join">I'm a Student</StudentLink>
        <StudentLink class = "teacher" to="/create">I'm a Teacher</StudentLink>
        
        
        </div> 
        
        </>
    )
}

export default Topbar;
