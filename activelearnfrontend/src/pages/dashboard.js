import React from 'react';
import Send from '../components/SendForm/send.js';
import Visual from '../components/Visual/visual.js';
import './dashboard.css';

const Dashboard = () => {
    return (
        <>
        <div id="wrapper">
            
            <Send />
            
            <Visual />
            </div>
        </>
    )
}

export default Dashboard;
