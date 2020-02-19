import React from 'react';

import './songs.styles.css';

const Songs = (props) => {
    return <div className='collection-preview'>
        <video width="400" controls>
            <source src={props.src} type="video/mp4" />
        </video>
        <input className='text-box'
            type='text'
            label='Display Name'
         />
    </div>
}

export default Songs;