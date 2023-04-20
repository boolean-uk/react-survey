import { RadioButton} from './RadioButton'
import { Checkbox } from './Checkbox'

import { useState } from 'react'

const initialFormData = {
  username: '',
  color:'',
  spent: [],
  review: '',
  email: '',
}

export const Form = () => {

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const checked = e.target.checked;

    if (inputName === "username") {
      setFormData({ ...formData, username: inputValue });
    }

    if (inputName === "email") {
      setFormData({...formData, email: inputValue })
    }

    if (inputName === 'color') {
      setFormData({...formData, color: inputValue })
    }

    if (inputName === 'review') {
      setFormData({...formData, review: inputValue})
    }

    if (inputName === 'spend-time' && checked) {
      checked ? setFormData({...formData, spent: [...formData.spent, inputValue]}) : setFormData({...formData})
    }
  }

  const handleSubmit = (e) => {
    console.log(formData)
    setFormData(initialFormData)
  }

  return(
  <form className="form" onSubmit={handleSubmit}>
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <RadioButton
        handleChange={handleChange}
        color={formData.color}
        spent={formData.spent}
      />
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <Checkbox
        handleChange={handleChange}
        spent = {formData.spent}
      />
    </div>
    <label>
      What else have you got to say about your rubber duck?
    <textarea
      name="review"
      cols="30"
      rows="10"
      onChange={handleChange}
      value={formData.review}
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
      <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      />
    </label>
      <input
        className="form__submit"
        type="submit"
        value="Submit Survey!" />
  </form>
  )
}
