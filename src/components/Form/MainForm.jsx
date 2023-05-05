import Checkboxes from "./Checkboxes";
import RadioButtons from "./Radio-buttons";

function Form({ formState, setFormState, initialFormState }) {
  const printFormToConsole = (e) => {
    e.preventDefault();
    console.log({ formState });
    console.log("initform", { initialFormState });
    setFormState(initialFormState);
    e.target.reset();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log("name", name);
    console.log("value", value);
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <form className="form" onSubmit={printFormToConsole}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons formState={formState} setFormState={setFormState} />
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <Checkboxes formState={formState} setFormState={setFormState} />
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={formState.review}
            onChange={onChange}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={onChange}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={onChange}
          />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </>
  );
}

export default Form;
