import React from 'react';


export const GirGridItem = (props) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={props.img.downsized_medium.url} alt={props.title} />
            <p> {props.title} </p>
        </div>
    )
}