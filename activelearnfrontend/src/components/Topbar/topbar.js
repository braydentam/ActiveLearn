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
        <div class = "topBarParagraphText">ActiveLearn enables teachers to create, share and engage their students using interactive documents. We built ActiveLearn to upgrade any online education platform or web conferencing system to share interactive documents to dramatically improve student-teacher engagement.
                                        </div>
        <StudentLink class="student" to="/join">Join Session</StudentLink>
        <StudentLink class = "teacher" to="/create">Create Session</StudentLink>
        
        
        </div> 
        
        </>
    )
}

export default Topbar;
