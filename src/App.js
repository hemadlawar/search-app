import { searchImages } from "./api";
import Imagelist from "./components/imagelist.js";
import Image from "./components/image";
import React, { useState } from "react";
function App() {
  const [images, setImages] = useState([]);
  const SendData = async (data) => {
    const dataa = await searchImages(data);
    setImages(dataa);
  };
  return (
    <div>
      <Imagelist proops={SendData} />
      <Image pp={images} />
    </div>
  );
}

export default App;
