import React from 'react';

export default function NavBarItem(props) {
    return <a className='NavBarItem' href='props.route'>{props.title}</a>;
}