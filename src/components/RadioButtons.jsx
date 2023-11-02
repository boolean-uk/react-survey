function RadioButton ({value, name}) {
  return (
  <label>
    <input type="radio" name={name} value={value} />
    {value}
  </label>
  )
}

export default function RadioButtons({valArr, name, inputHandler}) {
    return (
      <div className="form__radio-group" type="radio" onChange={(event) => inputHandler(event)} >
        {valArr.map((element, index) => <RadioButton key={index} name={name} value={element}/>)}
      </div>
    )
}