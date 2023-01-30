import React from 'react';
import NavBarItem from './NavBarItem'
import floral1 from '../images/3l.png'
import floral2 from '../images/3r.png'

export default function NavBar(props) {
    return <div className='NavBar'>
            <img className="L-Floral" src={floral1}></img>
            <div className='NavLinks '>
                <NavBarItem title="Home" route="/home"/>
                <NavBarItem title="Schedule" route="/schedule" />
                <NavBarItem title="Travel" route="/travel" />
                {/* <NavBarItem title="Story" route="/story" /> */}
                <NavBarItem title="Registry" route="/registry" />
                {/* <NavBarItem title="Recommendations" route="/recommendations" /> */}
                <NavBarItem title="RSVP" route="/RSVP" />
            </div>
            <img className="R-Floral" src={floral2}></img>
        </div>
}