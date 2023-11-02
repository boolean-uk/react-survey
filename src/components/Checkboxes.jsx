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
    {valDescArr.map((element, index) => <Checkbox key={index} value={"1"} description={"0"}/>)}
  )
}