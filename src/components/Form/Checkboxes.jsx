function Checkboxes({formState, setFormState}) {

  const onChange = (e) => {
    const { value, checked } = e.target
    console.log(e.target)
    console.log(e.target.value)

    const newState = {...formState}
    newState.spendTime[value] = checked

    setFormState(newState)

  }

  return (
    <>
      <ul>
        <li>
          <label>
            <input onChange={onChange} name="spend-time" type="checkbox" value="swimming" />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input onChange={onChange} name="spend-time" type="checkbox" value="bathing" />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input onChange={onChange} name="spend-time" type="checkbox" value="chatting" />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input onChange={onChange} name="spend-time" type="checkbox" value="noTime" />I don't
            like to spend time with it
          </label>
        </li>
      </ul>
    </>
  );
}

export default Checkboxes
