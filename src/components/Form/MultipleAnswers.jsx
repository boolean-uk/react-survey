/* eslint-disable react/prop-types */
export const MultipleAnswers = ({ option, setForm }) => {
  const ratingScale = [1, 2, 3, 4];

  const handleClick = (value) => {
    setForm(prevForm => ({...prevForm, colorRating: value}));
  }

  return (
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
        {ratingScale.map((rating) => (
          <li key={rating}>
            <input
              id={`color-${rating}`}
              type="radio"
              name="color"
              value={rating}
              checked={option === rating}
              onChange={() => handleClick(rating)}
            />
            <label htmlFor={`color-${rating}`}>{rating}</label>
          </li>
        ))}
    </div>
  );
}
