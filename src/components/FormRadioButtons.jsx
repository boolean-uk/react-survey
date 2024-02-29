/* eslint-disable react/prop-types */
export default function FormRadioButtons({ onRadioChange, radioValue }) {
  const handleRadioChange = (event) => {
    onRadioChange(event.target.value);
  };

  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          onChange={handleRadioChange}
          checked={radioValue === "1"}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          onChange={handleRadioChange}
          checked={radioValue === "2"}
        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          onChange={handleRadioChange}
          checked={radioValue === "3"}
        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          onChange={handleRadioChange}
          checked={radioValue === "4"}
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
