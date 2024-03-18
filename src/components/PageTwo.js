import React from 'react'
import sharpRightImage from "./img/shaper_2.png"
import Availclass from './Availclass'
import pageTwoImageOne from "./img/pageTwoImgOne.png";
import pageTwoImageTwo from "./img/pageTwoImageTwo.png";
import pageTwoImageThree from "./img/pageTwoImageThree.png";



const PageTwo = () => {
  return (
    <div className='pageTwo'>
      <div className='pageTwoContainer'>
        <div className='sharpRightImage'>
          <img src={sharpRightImage}/>
        </div>
        <div className='contentPageTwo'>
          <span>asgasgas</span>
        </div>

        <div className='classCards'>
          <Availclass name="NEWBIE CLASS" img={pageTwoImageOne}/>
          <Availclass name="ADVANCED CLASS" img={pageTwoImageTwo}/>
          <Availclass name="EXPERT CLASS" img={pageTwoImageThree}/>
        </div>
      </div>      
    </div>
  )
}

export default PageTwo