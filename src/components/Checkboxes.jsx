function Checkbox ({name, value, description, inputHandler}) {
  return (
    <label>
      <input
        name={name}
        type="checkbox"
        value={value}
        onChange={(event) => inputHandler(event)}
      />
        {description}
    </label>
  )
}

export default function Checkboxes({name, valDescArr, inputHandler}) {
  return (
    valDescArr.map((element, index) => <Checkbox key={index} name={name} value={element.value} description={element.description} inputHandler={inputHandler}/>)
  )
}