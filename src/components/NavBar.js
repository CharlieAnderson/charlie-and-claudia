import React from 'react';
import NavBarItem from './NavBarItem'
import floral1 from '../images/3l.png'
import floral2 from '../images/3r.png'

export default function NavBar(props) {
    return <div className='NavBar'>
            <img className="L-Floral" src={floral1}></img>
            <div className='NavLinks'>
                <NavBarItem title="Home" route="/page1"/>
                <NavBarItem title="Schedule" route="/page2" />
                <NavBarItem title="Travel" route="/page3" />
                <NavBarItem title="Story" route="/page4" />
                <NavBarItem title="Registry" route="/page5" />
                <NavBarItem title="Recommendations" route="/page6" />
                <NavBarItem title="RSVP" route="/page7" />
            </div>
            <img className="R-Floral" src={floral2}></img>
        </div>
}