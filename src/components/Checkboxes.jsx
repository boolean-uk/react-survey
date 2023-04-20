import React from "react";

function Checkboxes({ formData, setFormData }) {
  const handleChange = (e) => {
    const newData = { ...formData };
    const hobbies = newData.timeSpend
    if (e.target.checked) {
      hobbies.push(e.target.value);
    } else {
      const filterdItems = hobbies.filter(item => item !== e.target.value)
      newData.timeSpend = [...filterdItems]
    }
    setFormData(newData);
    console.log(newData);
  };

  return (
    <div>
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkboxes;
