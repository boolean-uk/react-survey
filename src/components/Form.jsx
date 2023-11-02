function Form({ theFormField, submitTheForm, handleChange }) {
  const radioOptions = ["color-one", "color-two", "color-three", "color-four"];
  const checkboxOptions = ["swiming", "bathing", "chatting", "noTime"];

  return (
    <>
      <form className="form" onSubmit={submitTheForm}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            {radioOptions.map((option, index) => (
              <li key={index}>
                <input
                  id={option}
                  type="radio"
                  name="colour"
                  value={index + 1}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor={option}>{index + 1}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul>
            {checkboxOptions.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    name="timeSpent"
                    value={option}
                    onChange={(e) => handleChange(e)}
                  />
                  {`${option.charAt(0).toUpperCase() + option.slice(1)}`}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={theFormField.review}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={theFormField.username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={theFormField.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </>
  );
}

export default Form;
