import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav >
            <ul className="navbar">
                <li><NavLink 
                style={({isActive})=>{return {color:isActive ? 'green' : ''} }}
                className="navbarlink"  to="/home">Home</NavLink></li>
                <li><NavLink 
                style={({isActive})=>{return {color:isActive ? 'green' : ''} }}
                className="navbarlink" to="/friends">Friends</NavLink></li>
                <li><NavLink 
                style={({isActive})=>{return {color:isActive ? 'green' : ''} }}
                className="navbarlink" to="/about">About</NavLink></li>
             {/* <li><NavLink 
                style={({isActive})=>{return {color:isActive ? 'green' : ''} }}
                className="navbarlink" to="/about/culture">About Culture</NavLink></li> */}
             
            </ul>
              
        </nav>

    
            
     
    );
};

export default Header;