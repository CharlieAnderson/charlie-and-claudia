import React from 'react';
import NavBarItem from './NavBarItem'
import HomeIcon from '../icons/png/001-in-love.png';
import LocationIcon from '../icons/png/009-location.png';
import StoryIcon from '../icons/png/001-in-love.png';
import RSVPIcon from '../icons/png/001-rsvp.png';
import RegistryIcon from '../icons/png/008-clipboard.png';

export default function NavBar(props) {
    return <div className='NavBar'>
            <div className='NavLinks'>
                <NavBarItem title="Home" route="/page1" icon={HomeIcon}/>
                <NavBarItem title="Location" route="/page2" icon={LocationIcon}/>
                <NavBarItem title="Story" route="/page3" icon={StoryIcon}/>
                <NavBarItem title="RSVP" route="/page4" icon={RSVPIcon}/>
                <NavBarItem title="Registry" route="/page5" icon={RegistryIcon}/>
            </div>
        </div>
}