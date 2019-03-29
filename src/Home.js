import React from "react";
import { Link } from "react-router-dom";
import '../src/homeStyle.css';
// import logo from './Graphics/NCCI_LogoWhite_TealTransparent.png';
import logo2 from './Graphics/NCCI-1st-IT-Hackathon-17.png';
import hackathonLogo from './Graphics/hackathonSVG.svg';
import Faq from './FrequentlyAskedQuestions';
import About from './About';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="stripe--1">
                    <div className="text-box--1">
                        <img src={logo2} alt="NCCI" id="ncci_logo" ></img>
                        {/* <p>Presented by the Innovation Group.</p> */}
                        <p><img src={hackathonLogo} alt="logo" className="hackathon_Logo"></img></p>
                    </div>
                </div>
                <div></div>
                <div id="icomp-neon" className="text-box--4">
                    <p><Link to="/Register" className="action-button shadow animate">Click Here to Register</Link></p>
                </div>
                <div className="text-box--2">
                    <h1>A place to get your hack-on</h1>
                    <p><a rel="noopener noreferrer" href="http://mysites.ncci.com/personal/apdrg/Documents/Shared%20with%20Everyone/NCCI%20Hackathon%202019%20Judging%20Guidelines.pdf" target="_blank">Rules and regulations</a></p>
                </div>

                <div className="text-box--3">
                    <About />
                    <Faq />
                </div>
            </div>
        )
    }
}

export default Home;