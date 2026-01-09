import React from 'react'

export default function Card({image, name, paragraph}) {
    return (
        <div className='projectItem'>
          {/* background image */}
          <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
          <div className="content">
            <h1 className='projtitle'>{name}</h1>
            <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          </div>
        </div>
      );
}
