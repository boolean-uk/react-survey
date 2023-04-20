import { useState } from 'react'
import {
  RadioButtons,
  Checkboxes
} from '.'

const SurveyForm = ({formData, handleSubmit, handleChange}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleChange={handleChange} color={formData.color}/>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes handleChange={handleChange} timeSpent={formData['spend-time']}/>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        >
        </textarea>
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
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}

export default SurveyForm
