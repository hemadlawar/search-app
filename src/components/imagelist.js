import React from "react";
import { useState } from "react";
export default function Imagelist({ proops }) {
  const [term, setTerm] = useState("");

  const funn = (event) => {
    event.preventDefault();
    proops(term);
  };

  const onChangeHandler = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={funn}>
        <input input={term} onChange={onChangeHandler} />
      </form>
      <div>this is image list /</div>
    </div>
  );
}
