import React from 'react';
// import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <div className='blog-item-container'>
            <div className='blog-date'>
                {props.date}
            </div>
            <h3>{props.title}</h3>
            
        </div>
    )
}