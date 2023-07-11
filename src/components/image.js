import React from "react";

export default function Image({ pp }) {
  console.log(pp);
  const objectsArray = Object.values(pp);
  let imgSrc = "";
  for (let i = 0; i < objectsArray.length; i++) {
    imgSrc = objectsArray[i].urls.full;
  }

  return <img src={imgSrc}></img>;
}
