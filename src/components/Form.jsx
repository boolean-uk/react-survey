import { useState } from "react";
import RadioGroup from "./RadioGroup";
import CheckboxesGroup from "./CheckboxesGroup";

export default function Form(props) {
  /** TODO: Add state fields in formData */
  const [formData, setFormData] = useState({
    color: '',
    ["spend-time"]: {   // TODO: ["spend-time"]: '' or "spend-time": '' ??
      // TODO: use values from checkboxData instead of the hard-coded items here
      "swimming": false,
      "bathing": false,
      "chatting": false,
      "noTime": false
    },
    review: '',
    username: '',
    email: ''
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    // NOTE: update nested object as presentes here https://react.dev/learn/updating-objects-in-state
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: {
          ...formData[name],
          [value]: checked
        }
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const radioData = [
    { id: "color-one", value: '1' },
    { id: "color-two", value: '2' },
    { id: "color-three", value: '3' },
    { id: "color-four", value: '4' }
  ]

  const isRadioChecked = value => formData.color === value

  const checkboxData = [
    { message: "Swimming", value: "swimming" },
    { message: "Bathing", value: "bathing" },
    { message: "Chatting", value: "chatting" },
    { message: "I don't like to spend time with it", value: "noTime" }
  ]

  const isCheckboxChecked = (value) => formData["spend-time"][value]
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <!-- Radio inputs go here --> */}
        <RadioGroup
          data={radioData}
          name="color"
          handleChange={handleChange}
          isChecked={isRadioChecked}
        />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> */}
        <CheckboxesGroup
          data={checkboxData}
          name="spend-time"
          handleChange={handleChange}
          isChecked={isCheckboxChecked}
        />
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        ></textarea></label
      ><label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange} /></label
      ><label
        >Leave us your email pretty please??<input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} /></label
      ><input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}