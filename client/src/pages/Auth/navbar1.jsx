import React from 'react';
import './navbar1.css';
import Button from './button';
import Card from "./Card";
import Team from './Team';
import { Link, NavLink } from "react-router-dom";
import Contact from './Contact';




const Navbar1 = () => {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <h2>
                        <span>W</span>o
                        <span>H</span>e
                        <span>L</span>ife
                        </h2>
                </div>
                <div className="menu-click">
                    <ul className="menu-items">
                        <li>
                            <a href='/' className='Home'>Home</a>
                            {/* <Link to="/">Home</Link> */}
                            {/* <NavLink className="Home" to="/">Home</NavLink> */}

                        </li>
                        <li>
                            <a href='#' className='Modes'>Modes</a>
                            {/* <Link to="/Modes">M</Link> */}
                            {/* <NavLink className="Modes" to="/">Modes</NavLink> */}

                        </li>
                        <li>
                            <a href='/Team' className='ourTeam'>Our Team</a>
                            {/* <Link to="/ourTeam">Team</Link> */}
                            {/* <NavLink className="ourTeam" to="/team">Our Team</NavLink> */}
                        </li>
                        <li>
                            <a href='/Contact' className='contactUs'> ContactUs </a>
                            {/* <Link to="contact">ContactUs</Link> */}
                            {/* <NavLink className="contactUs" to="/contactUs">ContactUs</NavLink> */}

                        </li>
                    </ul>
                </div>
                <div className='btns'>
                    <ul className="btns">
                        <li>
                            <Button 
                                type = "LOGIN"
                            />
                        </li>
                        <li>
                            <Button 
                                type = "SIGNUP"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
             {/* <section className='hero-section'>
                
                
                
            </section>  */}
        </>
    )
}


export default Navbar1;