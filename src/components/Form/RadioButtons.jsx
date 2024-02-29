import React, { useState } from "react";

function RadioButtons({ onChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange(event);
  };

  return (
    <div>
      <label className={selectedValue === "1" ? "selected" : ""}>
        <input
          name="colour"
          type="radio"
          value="1"
          onChange={handleRadioChange}
        />{" "}
        1
      </label>
      <label className={selectedValue === "2" ? "selected" : ""}>
        <input
          name="colour"
          type="radio"
          value="2"
          onChange={handleRadioChange}
        />{" "}
        2
      </label>
      <label className={selectedValue === "3" ? "selected" : ""}>
        <input
          name="colour"
          type="radio"
          value="3"
          onChange={handleRadioChange}
        />{" "}
        3
      </label>
      <label className={selectedValue === "4" ? "selected" : ""}>
        <input
          name="colour"
          type="radio"
          value="4"
          onChange={handleRadioChange}
        />{" "}
        4
      </label>
    </div>
  );
}

export default RadioButtons;
