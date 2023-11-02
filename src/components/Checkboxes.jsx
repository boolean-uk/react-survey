function Checkbox ({value, description, inputHandler}) {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        name="timeSpent"
        onChange={(event) => inputHandler(event)}
      />
        {description}
    </label>
  )
}

export default function Checkboxes({valDescArr, inputHandler}) {
  return (
    valDescArr.map((elementArr, index) => <Checkbox key={index} value={elementArr[1]} description={elementArr[0]} inputHandler={inputHandler}/>)
  )
}