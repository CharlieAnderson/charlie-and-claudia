import React from 'react';
import NavBarItem from './NavBarItem'
import floral1 from '../images/3l.png'
import floral2 from '../images/3r.png'

function toggleMenu() {
    var x = document.getElementById("navlinks");
    if (x.className === "NavLinks") {
        x.className += " Open";
    } else {
        x.className = "NavLinks";
    }
}

export default function NavBar(props) {
    return <div className='NavBar'>
            {/* <a href="javascript:void(0);" className="Hamburger" onClick={toggleMenu}>&#9776;</a> */}
            <img className="L-Floral" src={floral1}></img>
            <div className="NavLinks Open" id="navlinks">
                <NavBarItem title="Home" route="/home"/>
                <NavBarItem title="Schedule" route="/schedule" />
                <NavBarItem title="Travel" route="/travel" />
                {/* <NavBarItem title="Story" route="/story" /> */}
                <NavBarItem title="Registry" route="/registry" />
                {/* <NavBarItem title="Recommendations" route="/recommendations" /> */}
                <NavBarItem title="RSVP" route="/rsvp" />
                <NavBarItem title="FAQ" route="/faq" />
            </div>
            <img className="R-Floral" src={floral2}></img>
        </div>
}