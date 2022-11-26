import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarItem(props) {
    return <Link to={props.route} className='NavBarItem'>{props.title}</Link>
}
