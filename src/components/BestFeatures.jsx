function BestFeatures({ isChecked, handleChange }) {

  return (
    <ul>
      <li>
        <label>
          <input
            onChange={(e) => handleChange(e)}
            name="features"
            type="checkbox"
            value="yellow"
            checked={isChecked.isChecked1}
          />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={(e) => handleChange(e)}
            name="features"
            type="checkbox"
            value="squeak"
            checked={isChecked.isChecked2}
          />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={(e) => handleChange(e)}
            name="features"
            type="checkbox"
            value="big"
            checked={isChecked.isChecked3}
          />
          It's big!
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={(e) => handleChange(e)}
            name="features"
            type="checkbox"
            value="logo"
            checked={isChecked.isChecked4}
          />
          It has a logo!
        </label>
      </li>
    </ul>
  );
}

export default BestFeatures;
