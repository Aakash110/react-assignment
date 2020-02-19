import React from 'react';

import './menu-item.styles.css';
import Songs from '../songs/songs.components';

const MenuItem = (obj) => {
    return <div className='collection-preview'>
        <h1 className='title'>{obj.id}</h1>
        <div className='preview'>
            {
                obj.videos
                .map((item) => (
                <Songs key={item.questionId} {...item} />
                ))
            }
        </div>
    </div>
}

export default MenuItem;

