import React from 'react';

export default function Checkboxes({ setRatingTimeSpent, ratingTimeSpent }) {

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRatingTimeSpent(prevState => [...prevState, value]);
    } else {
      setRatingTimeSpent(prevState => prevState.filter(item => item !== value));
    }
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={ratingTimeSpent.includes('swimming')}
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
            checked={ratingTimeSpent.includes('bathing')}
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
            checked={ratingTimeSpent.includes('chatting')}
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
            checked={ratingTimeSpent.includes(`I don't like to spend time with it`)}
            onChange={handleCheckboxChange}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}
