import React from "react";
import Tooltip from "./Tooltip";

const MyComponent = () => {
  return (
    <div>
      <Tooltip label="Input Field" text="Hovered on Input Field" />
      <input type="text" placeholder="Enter Text" />
    </div>
  );
};

export default MyComponent;