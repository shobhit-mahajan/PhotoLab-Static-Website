import React from "react";
import { RiCameraLensLine } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaYoutube, FaGithubAlt } from "react-icons/fa";
import "../CSS/Footer.css";

export const Footersec = () => {
  return (
    <div className="footersec">
      <div className="footercontent">
        <div className="first">
          <div className="firstcontent">
            <h2>
              <RiCameraLensLine /> PhotoLab .
            </h2>
            <p>VijayNagar, Indore, Madhya Pradesh , India</p>
            <p>91+ 8989552299</p>
            <p>abcxyzwst@gmail.com</p>
            <div className="sociallink">
              <FaFacebook className="link" />
              <FaGithubAlt className="link" />
              <FaLinkedin className="link" />
              <FaYoutube className="link" />
            </div>
          </div>
        </div>
        <div className="second">
          <h4>Product</h4>
          <ul>
            <li>New Products</li>
            <li>Lenses</li>
            <li>Video camera</li>
            <li>Recycling</li>
            <li>Apps</li>
          </ul>
        </div>
        <div className="third">
          <h4>Inspired</h4>
          <ul>
            <li>Camera</li>
            <li>Printers</li>
            <li>Creative parts</li>
            <li>Stories</li>
            <li>Where to buy</li>
          </ul>
        </div>
        <div className="fourth">
          <h4>Support</h4>
          <ul>
            <li>Tips</li>
            <li>Techniques</li>
            <li>Software</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerlowercontent">
        <div className="leftfooter">
          <p>&#169; PhotoLab 2024,All rights reserved</p>
        </div>
        <div className="rightfooter">
          <p>
            Press Center <span> | Terms of Services </span>
          </p>
        </div>
      </div>
    </div>
  );
};
