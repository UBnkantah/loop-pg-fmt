import React from 'react'
import MobImg from "../images/mobile/image-curiosity.jpg"
import "../styles/Create.css"

const CreateMob = () => {
  return (
    <div className='container createMobCont'>
      <h2>OUR CREATORS</h2>
      <div className='createBoxConMob'>
        <div className='createBoxMob'>
            <img src={MobImg} alt="" />
            <div className='createTxt'>
                <h3>DEEP EARTH</h3>
            </div>
        </div>
      </div>
      <button className='createButton'>SEE ALL</button>
    </div>
  )
}

export default CreateMob

