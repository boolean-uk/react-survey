function RadioButton ({value, name, inputHandler}) {
  return (
    <li onClick={(event) => inputHandler(value)} >
      <input type="radio" name={name} value={value}/>
      <label>
        {value}
      </label>
    </li>
  )
}

export default function RadioButtons({valArr, name, inputHandler}) {
    return (
      <div className="form__radio-group" type="radio" inputHandler={inputHandler}>
        <ul>
          {valArr.map((element, index) => <RadioButton key={index} name={name} value={element} />)}
        </ul>
      </div>
    )
}