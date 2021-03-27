import React from 'react';
import './topbar.css';
import {StudentLink} from './studentElement';

const Topbar = () => {
    return (
        <>
        <div className = "bar">

        <h1 className = "title">ActiveLearn</h1>
        <span><img class = "logo1" src="learnLogo2.png" alt="logo"></img></span>
        <div className = "topBarIntroText">Bringing Interactivity to Online Classes</div>
        <br></br><br></br>
        <div class = "topBarParagraphText">Teachers can create, share, and engage with their students with interactive documents.
                                        </div>
        <StudentLink class="student" to="/join">Join Session</StudentLink>
        <StudentLink class = "teacher" to="/create">Create Session</StudentLink>
        
        
        </div> 
        
        </>
    )
}

export default Topbar;
