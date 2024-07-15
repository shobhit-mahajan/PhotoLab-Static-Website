import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CardContainer from "./CardContainer.json";
import "../CSS/Imagecard.css";
const ImageCard = () => {
  return (
    <div className="imagesec">
      <h1>Create Powerfull Images</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <div className="cardcontainer">
        {CardContainer.map(({ id, number, heading, paragraph }) => {
          return (
            <div className="card" key={id}>
              <div class="stroketext">
                <p>{number}</p>
              </div>
              <h3>{heading}</h3>
              <p>{paragraph}</p>
              <IoIosArrowDroprightCircle className="arrow" />
            </div>
          );
        })}
        {/* <div className="card">
          <div class="stroketext">
            <p>1</p>
          </div>
          <h3>Photo Session</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <IoIosArrowDroprightCircle/>
        </div> */}
      </div>
    </div>
  );
};

export default ImageCard;
