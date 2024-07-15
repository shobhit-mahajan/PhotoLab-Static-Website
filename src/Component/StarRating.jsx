import React from "react";
import { CiStar } from "react-icons/ci";
import "../CSS/Starrating.css";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ count }) => {
  const totalStar = 5;
  const starValue = count;
  console.log(starValue);
  return (
    <div>
      {[...Array(totalStar)].map((arr, index) => {
        console.log(index);
        return index < starValue ? <FaStar /> : <CiStar />;
      })}
    </div>
  );
};
