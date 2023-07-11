import React from "react";
import ImageShow from "./ImageShow";
export default function Image({ pp }) {
  const renderedImages = pp.map((pp) => {
    return <ImageShow key={pp.id} pp={pp} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}
