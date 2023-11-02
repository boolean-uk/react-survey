function Checkbox ({value, description}) {
  console.log(value, description)
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
  valDescArr.forEach((elementArr, index) => console.log(index, elementArr[0], elementArr[1]))
  // return (
  //   {valDescArr.map((elementArr, index) => <Checkbox key={index} value={elementArr[1]} description={elementArr[0]}/>)}
  // )
}