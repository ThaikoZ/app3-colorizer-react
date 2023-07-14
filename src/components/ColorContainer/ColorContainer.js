import React from "react";
import "./ColorContainer.css";
const ColorContainer = ({ color }) => {
  return (
    <form>
      <div id="colorContainer" style={{ backgroundColor: color }}>
        {color === undefined ? "Empty Color" : color}
      </div>
    </form>
  );
};

export default ColorContainer;
