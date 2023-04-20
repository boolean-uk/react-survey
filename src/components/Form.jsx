import RadioButtons from "./RadioButtons";
import CheckBoxes from "./CheckBoxes";

export default function Form({ handleSumbit, userData, setUserData }) {
  
  const handleChange = (e) => {
    e.target.type === "checkbox"
      ? userData.timeSpent.includes(e.target.value)
        ? setUserData({
            ...userData,
            timeSpent: [
              ...userData.timeSpent.filter((time) => time !== e.target.value),
            ],
          })
        : setUserData({
            ...userData,
            timeSpent: [...userData.timeSpent, e.target.value],
          })
      : setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={e => { handleSumbit(e) }} className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/*<!-- Radio inputs go here -->*/}
        <RadioButtons handleChange={handleChange} value={userData.colour} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/*<!-- checkboxes go here -->*/}
        <CheckBoxes handleCheckbox={handleChange} values={userData.timeSpent} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          onChange={handleChange}
          name="review"
          cols="30"
          rows="10"
          value={userData.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={userData.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={userData.email}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
