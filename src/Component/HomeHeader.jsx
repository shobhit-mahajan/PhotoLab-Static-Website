import React from "react";
import "../CSS/Header.css";
import { Button } from "./Button";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import star from "../Images/star.png";
import smallstar from "../Images/smallstar.png";
import line from "../Images/line.png";
const HomeHeader = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Where creative process</h1>
        <h1>happens</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Button data="get in touch" symbol={<MdOutlineArrowCircleRight />} />
      </div>
      <div className="starimg">
        <img src={star} alt="" />
      </div>
      <div className="smallstarimg">
        <img src={smallstar} alt="" />
      </div>
      <div className="lineimg">
        <img src={line} alt="" />
      </div>
    </div>
  );
};

export default HomeHeader;
