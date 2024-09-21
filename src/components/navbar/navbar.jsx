import './navbar.css';
import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({active}) => {
 
  return (
    <nav className={`navbar ${active === "home" ? "" : "services_nav"}`}>
      <a href="#" className="logo"><i className="fa-solid fa-pills"></i><span>Medihub</span></a>
            <ul className="navbar">
                {active=="home"?<li><Link to="/" className="active">Home</Link></li>:
                <li><Link to="/">Home</Link></li>}
                <li><a href="#">About Us</a></li>
                {active=="services"?<li><Link to="/services" className="active">Services</Link></li>:
                <li><Link to="/services">Services</Link></li>}
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>

            <div className="main">
                <a href="#" className="user"><i className="fa-solid fa-user"></i>Sign In</a>
                <a href="#">Register</a>
            </div>
            <div className="fa fa-burger" id="menu-icon"></div>
    </nav>
  );
};

export default Navbar;
