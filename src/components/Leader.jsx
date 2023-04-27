import React from 'react'
import HeroImgDesk from "../images/desktop/image-interactive.jpg"
// import HeroImgMob from "../images/mobile/image-interactive.jpg"
import "../styles/Leader.css"

const Leader = () => {
  return (
    <div className='container leaderContainer'>
        <div className='leaderImgCont'>
            <img src={HeroImgDesk} alt="" />
        </div>
        <div className='leadetails'>
            <h2>THE LEADER IN INTERATIVE VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
        </div>
    </div>
  )
}

export default Leader
