import React from "react";

function Checkboxes({ formData, setFormData }) {
  //  if(checked) {
  //   newData.timeSpent.push()
  //  } else {
  //   const filterdItems = hobbies.filter(item => item !== e.target.value)
  //   newData.timeSpent = [...filterdItems]
  //  }
  const handleChange = (e) => {
    const newData = { ...formData };
    const { name, value, checked } = e.target

    const temp = {...newData.timeSpent}
    newData.timeSpent = temp
    if (checked) {
      newData.timeSpent[value] = true
    } else {
      newData.timeSpent[value] = false
    }
    // console.log(newData)
    setFormData(newData)
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
              checked={formData.timeSpent.swimming}//{formData.timeSpent.includes("swimming")}
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
              checked={formData.timeSpent.bathing}
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
              checked={formData.timeSpent.chatting}
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
              checked={formData.timeSpent.noTime}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checkboxes;
