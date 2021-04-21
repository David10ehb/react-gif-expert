import React from 'react';
import PropTypes from 'prop-types';

export const GirGridItem = ({title, img}) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img} alt={title} />
            <p> {title} </p>
        </div>
    )
}

GirGridItem.proptype = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}