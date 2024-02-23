import DuckFormCheckBoxes from "./DuckFormCheckboxes";
import DuckFormRadioButtons from "./DuckFormRadioButtons";

export default function DuckForm() {
  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => (formDataObject[key] = value));
    event.target.reset();
    console.log(formDataObject);
  }

  return (
    <form className="form" onSubmit={(e) => submit(e)}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <DuckFormRadioButtons />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <DuckFormCheckBoxes />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" placeholder="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" placeholder="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
