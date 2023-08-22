import { useState } from "react";

function RadioButton(props) {
  const { id, name, value, handleChange, isChecked } = props
  
  return (
    <li>
      <input
        id={id} type="radio" name={name}
        value={value}
        onChange={handleChange}
        checked={isChecked(value)}
      />
      <label htmlFor={id}>{value}</label>
    </li>
  )
}

function RadioGroup(props) {
  const { data, name, value, handleChange, isChecked } = props

  return (
    <ul>
      {
        data.map(item => 
          <RadioButton
            id={item.id} name={name} value={item.value}
            handleChange={handleChange}
            isChecked={isChecked}
            key={item.id}
          />
        )
      }
    </ul>
  )
}


export default function Form(props) {
  /** TODO: Add state fields in formData */
  const [formData, setFormData] = useState({
    color: '',
    review: '',
    username: '',
    email: ''
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const data = type === "checkbox" ? checked : value
    setFormData({
      ...formData,
      [name]: data
    })
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

  const isRadioChecked = (value) => formData.color === value
  
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