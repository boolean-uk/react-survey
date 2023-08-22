function RadioButton(props) {
  const { id, name, value, handleChange, isChecked } = props
  
  return (
    <li>
      <input
        id={id} type="radio" name={name}
        value={value}
        onChange={handleChange}
        checked={isChecked(name, value)}
      />
      <label htmlFor={id}>{value}</label>
    </li>
  )
}

export default function RadioGroup(props) {
  const { header, data, name, handleChange, isChecked } = props

  return (
    <div className="form__group radio">
      <h3>{header}</h3>
      <ul>
        {
          data.map(item => {
            const itemId = `${name}-${item.id}`
            return (
              <RadioButton
                id={itemId} name={name} value={item.value}
                handleChange={handleChange}
                isChecked={isChecked}
                key={itemId}
              />
            )
          })
        }
      </ul>
    </div>
  )
}