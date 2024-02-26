import DuckFormCheckBoxes from "./DuckFormCheckboxes";
import DuckFormRadioButtons from "./DuckFormRadioButtons";
import { useState, useEffect } from "react";

const blankForm = {
  username: "",
  email: "",
  review: "",
};

export default function DuckForm({ appendForm, editForm, id }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEditing = () => {
    return Object.keys(editForm).length !== 0;
  };

  useEffect(() => {
    setFormData(editForm);
  }, [editForm]);

  function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => (formDataObject[key] = value));
    formDataObject.spendTime = formData.getAll("spendTime");
    formDataObject.id = id;
    appendForm(formDataObject, isEditing());
    setFormData(blankForm);
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={(e) => submit(e)}>
      {isEditing() && <p>(Edit Mode)</p>}
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
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review || ""}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          placeholder=""
          value={formData.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          placeholder=""
          value={formData.email || ""}
          onChange={handleChange}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
