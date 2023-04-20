export default function RadioButtons({ handleChange, value }) {
    return (
      <ul>
        <li>
          <input
            onChange={handleChange}
            id="color-one"
            type="radio"
            name="colour"
            value="1"
            checked={value === "1"}
          />
          <label htmlFor="color-one">1</label>
        </li>
        <li>
          <input
            onChange={handleChange}
            id="color-two"
            type="radio"
            name="colour"
            value="2"
            checked={value === "2"}
          />
          <label htmlFor="color-two">2</label>
        </li>
        <li>
          <input
            onChange={handleChange}
            id="color-three"
            type="radio"
            name="colour"
            value="3"
            checked={value === "3"}
          />
          <label htmlFor="color-three">3</label>
        </li>
        <li>
          <input
            onChange={handleChange}
            id="color-four"
            type="radio"
            name="colour"
            value="4"
            checked={value === "4"}
          />
          <label htmlFor="color-four">4</label>
        </li>
      </ul>
    );
  }