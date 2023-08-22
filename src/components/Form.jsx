import { useState } from "react";
import RadioGroup from "./RadioGroup";
import CheckboxesGroup from "./CheckboxesGroup";

const emptyFormData = {
  bestFeatures: {
    "yellow": false,
    "squeaks": false,
    "logo": false,
    "big": false
  },
  worstBits: {
    "yellow": false,
    "squeaks": false,
    "logo": false,
    "big": false
  },
  consistency: '',
  color: '',
  logo: '',
  timeSpent: {
    "swimming": false,
    "bathing": false,
    "chatting": false,
    "noTime": false
  },
  review: '',
  username: '',
  email: ''
}

export default function Form({ handleSubmittedAnswer }) {
  const [formData, setFormData] = useState(emptyFormData)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    /** NOTE:
     * update nested object as presented here
     * https://react.dev/learn/updating-objects-in-state
     */
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
    handleSubmittedAnswer(formData)
    setFormData(emptyFormData)
  }

  const rateData = [
    { id: "one", value: '1' },
    { id: "two", value: '2' },
    { id: "three", value: '3' },
    { id: "four", value: '4' }
  ]

  const checkboxData = [
    { message: "Swimming", value: "swimming" },
    { message: "Bathing", value: "bathing" },
    { message: "Chatting", value: "chatting" },
    { message: "I don't like to spend time with it", value: "noTime" }
  ]

  const featuresData = [
    { message: "It's yellow!", value: "yellow" },
    { message: "It squeaks!", value: "squeaks" },
    { message: "It has a logo!", value: "logo" },
    { message: "It's big!", value: "big" }
  ]

  const isRadioChecked = (name, value) => formData[name] === value
  const isCheckboxChecked = (name, value) => formData[name][value]
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <CheckboxesGroup
        header="What would you say are the best features of your rubber duck?"
        data={featuresData}
        name="bestFeatures"
        handleChange={handleChange}
        isChecked={isCheckboxChecked}
      />
      <CheckboxesGroup
        header="What would you say are the worst bits of your rubber duck?"
        data={featuresData}
        name="worstBits"
        handleChange={handleChange}
        isChecked={isCheckboxChecked}
      />
      <RadioGroup
        header="How do you rate your rubber duck consistency?"
        data={rateData}
        name="consistency"
        handleChange={handleChange}
        isChecked={isRadioChecked}
      />
      <RadioGroup
        header="How do you rate your rubber duck colour?"
        data={rateData}
        name="color"
        handleChange={handleChange}
        isChecked={isRadioChecked}
      />
      <RadioGroup
        header="How do you rate your rubber duck logo?"
        data={rateData}
        name="logo"
        handleChange={handleChange}
        isChecked={isRadioChecked}
      />
      <CheckboxesGroup
        header="How do you like to spend time with your rubber duck"
        data={checkboxData}
        name="timeSpent"
        handleChange={handleChange}
        isChecked={isCheckboxChecked}
      />
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