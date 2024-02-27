/* eslint-disable react/prop-types */
export const MultipleAnswers = ({ setForm }) => {
  const setColourRating = (rating) => {
    setForm(prevForm => ({ ...prevForm, colourRating: rating }));
  }
  return (
    <ul>
      <li>
        <input id="color-one" type="radio" name="color" value="1" onClick={() => setColourRating(1)} />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input id="color-two" type="radio" name="color" value="2" onClick={() => setColourRating(2)} />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input id="color-three" type="radio" name="color" value="3" onClick={() => setColourRating(3)} />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input id="color-four" type="radio" name="color" value="4" onClick={() => setColourRating(4)} />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
