import React from 'react';
import imageOne from './img/yoga-web-template.png';
import imageTwo from './img/shaper_1.png';

const PageOne = () => {
  return (
    <div>
      <div className='container'>
          <div className='leftImage'>
            <div className='backImage'>
              <img src={imageTwo} />
            </div>
            <div className='mainImage'>
              <img src={imageOne} className='frontImage' />  
            </div>
          </div>
      </div>
    </div>
  )
}

export default PageOne