import React from "react";
import { Button } from "./Button";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "../CSS/Aboutsec.css";
const Aboutsec = () => {
  return (
    <div className="aboutsec">
      <div className="leftaboutsec"></div>
      <div className="rightaboutsec">
        <h1>About PhotoLab .</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          laudantium aliquid dolores perspiciatis totam libero est quas
          repudiandae mollitia consectetur ab dignissimos odio, aspernatur,
          officiis eius soluta id itaque nisi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          molestiae temporibus praesentium tempore ducimus mollitia reiciendis
          aperiam quo, ab deleniti hic, possimus repellat error. Suscipit
          possimus saepe consequatur architecto! Quae?
        </p>
        <Button data="Know More" symbol={<IoIosArrowDroprightCircle />} />
      </div>
    </div>
  );
};

export default Aboutsec;
