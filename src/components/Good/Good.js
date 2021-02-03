import React from 'react';
import './Good.css';

const Good = ({url}) => {

    return (
        <div className='image-wrap'>
            <img src={url} alt='uploaded'/>
        </div>
    )
}

export default Good;