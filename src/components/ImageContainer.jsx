import React from "react";
import "../styles/imagecontainer.css";

const ImageContainer = ({ imageSource, description }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <img className="image" src={imageSource} alt="alt text goes here" />
      <p className="instructor-profile text-2xl">{description}</p>
    </div>
  );
};

export default ImageContainer;
