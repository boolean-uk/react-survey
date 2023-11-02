function ColorRadioButtons({ form, handleChange }) {
  return (
    <ul>
      <li>
        <input
          onChange={(e) => handleChange(e)}
          id="color-one"
          type="radio"
          name="color"
          value="1"
          checked={form.color === "1"}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          onChange={(e) => handleChange(e)}
          id="color-two"
          type="radio"
          name="color"
          value="2"
          checked={form.color === "2"}
        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          onChange={(e) => handleChange(e)}
          id="color-three"
          type="radio"
          name="color"
          value="3"
          checked={form.color === "3"}
        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          onChange={(e) => handleChange(e)}
          id="color-four"
          type="radio"
          name="color"
          value="4"
          checked={form.color === "4"}
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}

export default ColorRadioButtons
