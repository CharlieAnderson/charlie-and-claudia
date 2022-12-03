import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarItem(props) {
    return <Link to={props.route} className='NavBarItem'>
            <img className='NavBarItemIcon' tabindex="1" src={props.icon}/>
        <div className='NavBarItemText'>{props.title}</div>
    </Link>
}
