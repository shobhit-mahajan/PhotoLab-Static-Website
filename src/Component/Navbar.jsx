import React, { useRef, useState } from "react";
import { RiCameraLensLine } from "react-icons/ri";
import { LuYoutube } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import "../CSS/Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const handlenavbar = () => {
    setmenu(!menu);
  };
  const navbarref = useRef();
  useEffect(() => {
    const closenav = (e) => {
      if (!navbarref.current.contains(e.target)) {
        setmenu(false);
      }
    };
    document.addEventListener("mousedown", closenav);
  }, []);
  return (
    <div className="header">
      <div className="logo ">
        <RiCameraLensLine className="icon" />
        <h1>PhotoLab</h1>
      </div>

      <div className={`nav ${menu ? "show" : " "}`} ref={navbarref}>
        <ul>
          <li className="active">Home</li>
          <li>Pages</li>
          <li>PhotoGallery</li>
          <li>PhotoShoot</li>
        </ul>
        <div className="btn">
          <h4>Youtube</h4>
          <LuYoutube className="icon" />
        </div>
      </div>
      <div className="navicon" onClick={handlenavbar}>
        {menu ? <IoCloseSharp /> : <FaBarsStaggered />}
      </div>
    </div>
  );
};

export default Navbar;
