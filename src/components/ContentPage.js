import React from 'react';

export default function NavBar(props) {
    return <div className='ContentPage'>
        <img src={props.imgSrc} />
        <div className='ContentPage-Children'>{props.children}</div>
    </div>
}