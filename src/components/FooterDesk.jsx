import Logo from "../images/logo.svg"
import FBLogo from "../images/icon-facebook.svg"
import TwtLogo from "../images/icon-twitter.svg"
import PinLogo from "../images/icon-pinterest.svg"
import IGLogo from "../images/icon-instagram.svg"
import "../styles/Footer.css"

const FooterDesk = () => {
  return (
    <div className="footer container">
        <div className="footer-left footer-item">
            <img src={Logo} alt="" className="logo-img-footer" />
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
        </div>
        <div className="footer-item">
            <div className="footer-logo">
                <img src={FBLogo} alt="" />
                <img src={TwtLogo} alt="" />
                <img src={PinLogo} alt="" />
                <img src={IGLogo} alt="" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved</p>        
        </div>
    </div>
  )
}

export default FooterDesk
