/* eslint-disable react/prop-types */
import { useState } from "react";
import SurveyFormButtons from "./SurveyFormButtons";
import SurveyFormSpendTime from "./SurveyFormSpendTime";

function SurveyForm({
  addNewSurveyEntry,
  formData,
  setFormData,
  INITIAL_FORM_DATA,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submit: ", formData);
    addNewSurveyEntry(formData);
    setFormData({ ...INITIAL_FORM_DATA });
  };

  // console.log("Render...");
  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <SurveyFormButtons formData={formData} setFormData={setFormData} />
        {/* <!-- Radio inputs go here --> */}
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <SurveyFormSpendTime formData={formData} setFormData={setFormData} />
        {/* <!-- checkboxes go here --> */}
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" defaultValue="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default SurveyForm;
