import React from 'react'

export default function Card({image, name, paragraph, bgColor}) {
  return (
    <div className='projectItem' style={{ backgroundColor: bgColor || 'rgba(0, 0, 0, 0.4)' }}>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <div className="content">
        <h1 className='projtitle'>{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
      </div>
    </div>
  );
}
