import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Mo.Emad</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
              </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experiance"
              smooth={true}
              
            >
              <li>Experiance</li>
            </Link>
            <Link
              spy={true}
              to="Portofolio"
              smooth={true}
              
            >
              <li>Portofolio</li>
            </Link>
            <Link
              spy={true}
              to="Testomonials"
              smooth={true}
              
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
