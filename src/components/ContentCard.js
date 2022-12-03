import React from 'react';

export default function NavBar(props) {
    return <div className='Card'>
        <div className='ContentBody'>
            {props.text}
        </div>
    </div>
}