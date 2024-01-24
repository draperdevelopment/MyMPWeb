import React from "react";
import "./ImageSection.css";

interface ImageSectionProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  inverted?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = (props) => {
  return (
    <div className={`section ${props.reverse ? "flexReversed" : ""}`}>
      <div className="textContainer">
        <h2 className="subtitle">{props.title}</h2>
        <br />
        <p className="textContent">{props.text}</p>
      </div>
      <div>
        <img src={props.image} className="image" alt="member" />
      </div>
    </div>
  );
};

export default ImageSection;
