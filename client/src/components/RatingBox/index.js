import React from "react";
import "./style.css";

const RatingBox = () => {


  return (
    <div>
      <p className="rating-text">1 = </p>
      <span className="rating-dot rating-1" />
      <p className="rating-text">2 = </p>
      <span className="rating-dot rating-2" />
      <p className="rating-text">3 = </p>
      <span className="rating-dot rating-3" />
      <p className="rating-text">4 = </p>
      <span className="rating-dot rating-4" />
    </div>
  );
};

export default RatingBox;