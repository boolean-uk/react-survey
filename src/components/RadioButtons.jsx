function RadioButton ({value, name, inputHandler}) {

  return (
    <li>
      <input type="radio" value={value}  />
      <label name={name} onClick={(event) => inputHandler(event)}>
        {value}
      </label>
    </li>
  )
}

export default function RadioButtons({valArr, name, inputHandler}) {
    return (
      <div className="form__radio-group" type="radio">
        <ul>
          {valArr.map((element, index) => <RadioButton key={index} name={name} value={element} inputHandler={inputHandler}/>)}
        </ul>
      </div>
    )
}