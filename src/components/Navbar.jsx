import { useState } from 'react'
import Logo from "../images/logo.svg"
import "../styles/Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"



const Navbar = () => {
    const [mobile, setMobile] = useState(false)

  return (
    <section>
        <div className='navbar'>
            <img src={Logo} alt="log" />
            <nav className={mobile ? 'nav-mob' : 'nav-desk'} onClick={() => setMobile(false)}>
                <a href='/'>About</a>
                <a href='/'>Careers</a>
                <a href='/'>Events</a>
                <a href='/'>Products</a>
                <a href='/'>Support</a>
            </nav>
            <button onClick={() => setMobile(!mobile)} className='nav-icons'>
                {mobile ?  <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
        </div>
        <div>
            <h2>IMMERSIVE EXPERIENCES THAT DELIVER</h2>
        </div>
    </section>
    
  )
}

export default Navbar
