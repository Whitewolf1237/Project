import React from 'react';
import mainImage from "./img/mainImage.png"
import shaperFirst from "./img/shaperFirst.png"

const PageOne = () => {
  return (
    <div>
      <div className='containerPageOne'>
          <div className='leftImage'>
            <div className='mainImage'>
              <img src={mainImage} className='frontImage' />  
            </div>
          </div>
          <div className='rightSide'>
            <div className='yogaClass'>
              <h1 className='yogaClass'>YOGA CLASS</h1>
            </div>
            <div className='content'>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <div >
              <button className='joinBtn'>Join Now</button>
            </div>
          </div>
      </div>
      <div className='cornerShape'>
            <img src={shaperFirst}/>
          </div>
    </div>
  )
}

export default PageOne