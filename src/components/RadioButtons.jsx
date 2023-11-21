function RadioButton ({value, name, inputHandler}) {
  return (
    <li>
      <label onClick={(event) => inputHandler(event)}>
      <input type="radio" name={name} value={value} />
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