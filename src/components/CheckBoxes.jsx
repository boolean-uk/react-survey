import React, { useState } from "react";

const CheckBoxes = () => {
  const [time, setTime] = useState("");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleTimeChange}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            onChange={handleTimeChange}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={handleTimeChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            onChange={handleTimeChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
};

export default CheckBoxes;
