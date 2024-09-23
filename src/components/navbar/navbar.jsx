import './navbar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({active}) => {
  const [menu, setMenu] = useState(false);
  function HandleClick() {
    setMenu(!menu);
    if(menu) {
      document.querySelector('.navbar').classList.remove('open');
      document.querySelector('.main').classList.remove('open');
    } else {
      document.querySelector('.navbar').classList.add('open');
      document.querySelector('.main').classList.add('open');
    }
  }
 
  return (
    <>
    <nav className={active === "home" ? "" : "glassmorphism"}>
      <Link to="/" className="logo"><i className="fa-solid fa-pills"></i><span>Medihub</span></Link>
            <ul className="navbar open">
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
            {menu == false ?<div className="fa-solid fa-bars" id="menu-icon" onClick={HandleClick}></div>:
            <div className="fa-solid fa-times" id="menu-icon" onClick={HandleClick}></div>}
    </nav>
  </>
  );
};

export default Navbar;
