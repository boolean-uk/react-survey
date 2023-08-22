function RadioButton(props) {
  const { id, name, value, handleChange, isChecked } = props
  
  return (
    <li>
      <input
        id={id} type="radio" name={name}
        value={value}
        onChange={handleChange}
        checked={isChecked(value)}
      />
      <label htmlFor={id}>{value}</label>
    </li>
  )
}

export default function RadioGroup(props) {
  const { data, name, handleChange, isChecked } = props

  return (
    <ul>
      {
        data.map(item => 
          <RadioButton
            id={item.id} name={name} value={item.value}
            handleChange={handleChange}
            isChecked={isChecked}
            key={item.id}
          />
        )
      }
    </ul>
  )
}