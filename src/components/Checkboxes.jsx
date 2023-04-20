import React from "react";

function Checkboxes({ formData, setFormData }) {

  const handleChange = (e) => {
    const newData = { ...formData };
    const { value, checked } = e.target

    newData.timeSpent = [...newData.timeSpent]
    if (checked) {
      newData.timeSpent.push(value)
    } else {
      const filteredItems = formData['timeSpent'].filter(item => item !== value)
      newData.timeSpent = [...filteredItems]
    }
    setFormData({ ...newData })
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
              checked={formData.timeSpent.includes("swimming")}
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
              checked={formData.timeSpent.includes("bathing")}
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
              checked={formData.timeSpent.includes("chatting")}
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
              checked={formData.timeSpent.includes("noTime")}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkboxes;
