import React from "react";
import { Link } from "react-router-dom";
import style from '../src/homeStyle.css';
import logo from './Graphics/NCCI_LogoWhite_TealTransparent.png';
import hackathonLogo from './Graphics/hackathonSVG.svg';
import Faq from './FrequentlyAskedQuestions';
import About from './About';
import Menu from './MenuComponent'

class Home extends React.Component {

    render() {
		return (
            <div>
                <div class="menu-body"><Menu /></div>
                <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'></link>
                <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'></link>
                <div class="stripe--1">
                    <div class="text-box--1">
                    <h1><img src={logo} alt="NCCI"></img>NCCI Hackathon.</h1>
                    <p>Presented by the Innovation Group.</p>
                    <p><img src={hackathonLogo} alt="logo" class="hackathon_Logo"></img></p>
                    </div>
                </div>
                <div class="text-box--4">
                <a href="#" class="action-button shadow animate red"><Link to="/Register">Register</Link></a>
                </div>
                <div class="text-box--2">
                    <h1>A place to get your hack-on</h1>
                    <p>Pure Awesome.</p>
                </div>
                
                <div class="text-box--3">
                <About />
                <Faq />
                </div> 

                <div>
                <footer>
                    <p>Copyright © 2015</p>
                </footer>
                </div>
                
                     
            </div>                   
        )
    }
}

export default Home;