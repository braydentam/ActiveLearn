import React from 'react';
import Topbar from '../components/Topbar/topbar.js';
import About from '../components/About/about.js';
import Footer from '../components/Footer/footer.js';

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default Home;
