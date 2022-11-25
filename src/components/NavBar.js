import React from 'react';
import NavBarItem from './NavBarItem'

export default function NavBar(props) {
    return <div className='NavBar'>
            <div className='NavLinks'>
                <NavBarItem title="thing1" route="/page1"/>
                <NavBarItem title="thing2" route="/page2"/>
                <NavBarItem title="thing3" route="/page3"/>
                <NavBarItem title="thing4" route="/page4"/>
                <NavBarItem title="thing5" route="/page5"/>
            </div>
        </div>
}