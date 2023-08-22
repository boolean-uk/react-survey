function Checkbox(props) {
  const { message, name, value, handleChange, isChecked } = props
  
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
          checked={isChecked(value)}
        />
        {message}
      </label>
    </li>
  )
}

export default function CheckboxesGroup(props) {
  const { header, data, name, handleChange, isChecked } = props

  return (
    <>
      <h3>{header}</h3>
      <ul>
        {
          data.map(item =>
            <Checkbox
              message={item.message}
              name={name}
              value={item.value}
              handleChange={handleChange}
              isChecked={isChecked}
              key={item.value}
            />
          )
        }
      </ul>
    </>
  )
}