function Checkbox ({value, description}) {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        onChange={() => console.log(value)}
      />
        {description}
    </label>
  )
}

export default function Checkboxes({valDescArr}) {
  return (
    valDescArr.map((elementArr, index) => <Checkbox key={index} value={elementArr[1]} description={elementArr[0]}/>)
  )
}