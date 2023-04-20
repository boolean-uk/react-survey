import { RadioButton} from './RadioButton'
import { Checkbox } from './Checkbox'

export const Form = ({formData, handleChange, handleSubmit}) => {

  const change = (e) => {
    handleChange(e)
  }

  const submit = (e) => {
    handleSubmit(e)
  }

  return(
  <form className="form" onSubmit={submit}>
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <RadioButton
        onChange={change}
        color={formData.color}
        spent={formData.spent}
      />
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <Checkbox
        onChange={change}
        spent = {formData.spent}
      />
    </div>
    <label>
      What else have you got to say about your rubber duck?
    <textarea
      name="review"
      cols="30"
      rows="10"
      onChange={change}
      value={formData.review}
    ></textarea>
    </label>
    <label>
      Put your name here (if you feel like it):
      <input
      type="text"
      name="username"
      value={formData.username}
      onChange={change}
      />
    </label>
    <label>
      Leave us your email pretty please??
      <input
      type="email"
      name="email"
      value={formData.email}
      onChange={change}
      />
    </label>
      <input
        className="form__submit"
        type="submit"
        value="Submit Survey!" />
  </form>
  )
}
