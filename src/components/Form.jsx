import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

export default function Form({ answers, setAnswers, form, setForm}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswers([...answers, form]);
    setForm({
      ratingColor: "0",
      ratingTimeSpent: "",
      text: "",
      name: "",
      email: "",
    });
  }

  const handleTextChange = (e) => {
    setForm({...form, text: e.target.value});
  }

  const handleNameChange = (e) => {
    setForm({...form, name: e.target.value});
  }

  const handleEmailChange = (e) => {
    setForm({...form, email: e.target.value});
  }
    

  return (
      <form className='form' onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons setForm={setForm} form={form}/>
      </div>
      <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <Checkboxes setForm={setForm} form={form} />
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          value={form.text}
          onChange={handleTextChange}
          ></textarea></label>
        <label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          value={form.name}
          onChange={handleNameChange}
          /></label>
      <label>Leave us your email pretty please??<input
          type="email"
          name="email"
          value={form.email}
          onChange={handleEmailChange}/>
          </label><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
  )
}
