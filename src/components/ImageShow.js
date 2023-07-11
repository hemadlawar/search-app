import React from "react";
import "./style.css";
function ImageShow({ pp }) {
  return (
    <div className="image">
      <div>
        <img src={pp.urls.small} alt={pp.alt_description} />
      </div>
    </div>
  );
}

export default ImageShow;
////*
