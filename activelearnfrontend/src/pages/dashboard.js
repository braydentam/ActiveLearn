import React from 'react';
import Send from '../components/SendForm/send.js';
import Visual from '../components/Visual/visual.js';
import './dashboard.css';
import {ToggleLink} from '../components/TaskBar Teacher/toggleElementTeacher';

const Dashboard = () => {
    return (
        <>
        <div id="wrapper">
            
            <Send />
            
            <Visual />
            {/* <ToggleLink to= "/teacher">
                <button className="btn-back-teacher"> Back </button>
            </ToggleLink> */}
            </div>
        </>
    )
}

export default Dashboard;
