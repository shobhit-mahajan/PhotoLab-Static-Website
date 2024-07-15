import React from "react";
import { StarRating } from "./StarRating";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/Testimonial.css";
import reviewdata from "./Review.json";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="reviewsec">
      <h1>What are user Saying about us.</h1>
      <div className="reviewcardcontainer">
        <Slider {...settings}>
          {reviewdata.map((id) => {
            return (
              <div className="reviewcard" key={id}>
                <div className="uppercontent">
                  <img src={id.image} alt="Profile" />
                  <div className="detail">
                    <h3>{id.name}</h3>
                    <p>{id.position}</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  odit consectetur adipisci labore natus ipsam omnis nam
                  provident sit dolores soluta architecto animi alias corporis
                  accusamus exercitationem libero, neque ipsum.
                </p>
                <div className="rating">
                  <StarRating count={id.rating} />
                </div>
              </div>
            );
          })}
          {/* <div className="reviewcard">
              <div className="uppercontent">
                <img src={profileimg} alt="Profile" />
                <div className='detail'>
                <h3>Shobhit Mahajan</h3>
                <p>Frontend Developer</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit consectetur adipisci labore natus ipsam omnis nam provident sit dolores soluta architecto animi alias corporis accusamus exercitationem libero, neque ipsum.</p>
              <div className="rating">
                  <StarRating count="2"/>
              </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
