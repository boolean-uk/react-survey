/* eslint-disable react/prop-types */
export const MultipleAnswers = ({ option, setForm }) => {
  const handleClick = (value) => {
    setForm(prevForm => ({...prevForm, colorRating: value}));
  }

  return (
    <ul>
      <li>
        <input id="color-one" type="radio" name="color" value="1" checked={option === 1} onChange={() => handleClick(1)} />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input id="color-two" type="radio" name="color" value="2" checked={option === 2} onChange={() => handleClick(2)} />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input id="color-three" type="radio" name="color" value="3" checked={option === 3} onChange={() => handleClick(3)} />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input id="color-four" type="radio" name="color" value="4" checked={option === 4} onChange={() => handleClick(4)} />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
