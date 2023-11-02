function RadioButton ({value}) {
  return (
  <label>
    <input type="radio" name="contact" value={value}/>
    {value}
  </label>
  )
}

export default function RadioButtons({valArr}) {
    return (
      <div className="form__radio-group" type="radio" onChange={(event) => inputHandler(event)} >
        {valArr.map((element, index) => <RadioButton key={index} value={element}/>)}
      </div>
    )
}