import React from 'react';

export default function Checkboxes({setForm, form}) {

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const newTimeSpent = form.ratingTimeSpent.includes(value)
      ? form.ratingTimeSpent.filter((time) => time !== value)
      : [...form.ratingTimeSpent, value];
    setForm({ ...form, ratingTimeSpent: newTimeSpent });
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={form.ratingTimeSpent.includes('swimming')}
            onChange={handleCheckboxChange}
          />Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            checked={form.ratingTimeSpent.includes('bathing')}
            onChange={handleCheckboxChange}
          />Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            checked={form.ratingTimeSpent.includes('chatting')}
            onChange={handleCheckboxChange}

          />Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="I don't like to spend time with it"
            checked={form.ratingTimeSpent.includes("I don't like to spend time with it")}
            onChange={handleCheckboxChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}
