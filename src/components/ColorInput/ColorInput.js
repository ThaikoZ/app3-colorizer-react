import React from "react";
import "./ColorInput.css";
const ColorInput = ({ color, setColor }) => {

  const handleChangeColor = (e) => {
    const v = e.target.value.toLowerCase();

    if (v === "") setColor("Empty Color");
    else setColor(v);
  };

  return (
    <form>
      <div className="input-field">
        <input
          type="text"
          required
          placeholder="Add color name"
          onChange={(e) => handleChangeColor(e)}
        />
        <label></label>
      </div>
    </form>
  );
};

export default ColorInput;
