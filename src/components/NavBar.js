import React from 'react';
import NavBarItem from './NavBarItem'

export default function NavBar(props) {
    return <div className='NavBar'>
            <div className='NavLinks'>
                <NavBarItem title="thing1" route=""/>
                <NavBarItem title="thing2" route=""/>
                <NavBarItem title="thing3" route=""/>
                <NavBarItem title="thing4" route=""/>
                <NavBarItem title="thing5" route=""/>
            </div>
        </div>
}