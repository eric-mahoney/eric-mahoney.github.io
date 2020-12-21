import React from "react";
import "./SectionHeader.css";

function SectionHeader(props) {
  // if image == true is passed from props render an image as well
  if (props.image) {
    return (
      <div className="header-container image-true">
        <img className="picture" src={props.imageUrl}></img>
        <div className="description introduction">
          <h2 className="description__h2">{props.header}</h2>
          <p className="description__p line-height muted margin20t">{props.description}</p>
        </div>
      </div>
    );

    // return a simple section header without an image
  } else {
    return (
      <div className="header-container">
        <div className="description">
          <h2 className="description__h2">{props.header}</h2>
          <p className="description__p line-height muted margin20t">{props.description}</p>
        </div>
      </div>
    );
  }
}

export default SectionHeader;
