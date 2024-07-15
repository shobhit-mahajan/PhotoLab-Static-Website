import React from "react";
import experiencesecimg from "../Images/experimentimg.png";
import "../CSS/Experience.css";
export const Experimentsec = () => {
  return (
    <div className="expsection">
      <div className="leftexpsec">
        <h1>Experiment and </h1>
        <h1>Personal Project .</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          illo ipsam optio, in incidunt repellat blanditiis dicta voluptatum
          rerum quos ea voluptate. Autem, saepe labore nam velit consequuntur
          delectus aut!
        </p>
        <div className="expno">
          <div className="value">
            <h3>45+</h3>
            <p>Cute Custumes</p>
          </div>
          <div className="value">
            <h3>56K</h3>
            <p>Occasions</p>
          </div>
          <div className="value">
            <h3>56+</h3>
            <p>Publications</p>
          </div>
        </div>
      </div>
      <div className="rightexpsec">
        <img src={experiencesecimg} alt="experience section" width="350px" />
      </div>
    </div>
  );
};
