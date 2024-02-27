/* eslint-disable react/prop-types */
import '/src/App.css'
import { MultipleAnswers } from './MultipleAnswers'
import { MultipleChoice } from './MultipleChoice';

export const SurveyForm = ({form, setForm, handleSubmit: HandleSubmit}) => {
  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <MultipleAnswers option={form.colorRating} setForm={setForm} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <MultipleChoice options={form.spendTime} setForm={setForm} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={form.text}
          onChange={(e) => setForm(prevForm => ({...prevForm, text: e.target.value}))}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input 
          type="text" 
          name="username"
          value={form.name} 
          onChange={(e) => setForm(prevForm => ({...prevForm, name: e.target.value}))}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={(e) => setForm(prevForm => ({...prevForm, email: e.target.value}))}
        />
      </label>
      <input
        className="form__submit"
        type="submit"
        value="Submit Survey!"
        onClick={(e) => {HandleSubmit(e)}}
      />
    </form>
  );
}