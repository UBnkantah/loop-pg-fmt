import React from 'react'
import "../styles/Create.css"
import { CreateData } from './Data'

const CreatDesk = () => {
  return (
    <div className="createContainer container">
      <div className='createTop'>
        <h2>OUR CREATIONS</h2>
        <button className='createButton'>SEE ALL</button>
      </div>
      <div className='createBoxCon'>
        {CreateData.map((item) => {
          return(
            <div className='createBox' key={item.id}>
              <img src={item.deskImg} alt="" />
              <div className='createTxt'>
                <h3>{item.text}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreatDesk
