import React from "react";
import { FaCamera } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { PiDrone } from "react-icons/pi";
import servicesecimg from "../Images/servicesecimg.png";
import "../CSS/Services.css";
const ServiceCard = () => {
  return (
    <div className="container">
      <h1>Services that we Provide .</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tenetur atque a sit sunt aut, consequatur velit unde quod, natus neque
        dolore
      </p>
      <div className="servicecontent">
        <div className="leftsidecontent">
          <img src={servicesecimg} alt="services" />
        </div>
        <div className="rightsidecontent">
          <div className="des">
            <FaCamera className="icons" />
            <h4>Photography</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aperiam porro quibusdam odio, hic quam, esse
            </p>
          </div>
          <div className="des">
            <PiDrone className="icons" />
            <h4>Aerial Photography</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aperiam porro quibusdam odio, hic quam, esse
            </p>
          </div>
          <div className="des">
            <CiVideoOn className="icons" />
            <h4>Videography</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aperiam porro quibusdam odio, hic quam, esse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
