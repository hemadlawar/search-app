import { searchImages } from "./api";
import Imagelist from "./components/imagelist.js";
import Image from "./components/image";
import React, { useState } from "react";
function App() {
  const SendData = async (data) => {
    const dataa = await searchImages(data);
  };
  return (
    <div>
      <Imagelist proops={SendData} />
      <Image />
    </div>
  );
}

export default App;
