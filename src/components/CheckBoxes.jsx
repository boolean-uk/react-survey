function Checkboxes(properties) {
    return (
        <ul>
  <li>
    <label>
        <input name="spend_time" type="checkbox" value="swimming" checked={properties.form.spend_time.swimming} onChange={properties.eventCallback} />Swimming
    </label>
  </li>
  <li>
    <label>
        <input name="spend_time" type="checkbox" value="bathing" checked={properties.form.spend_time.bathing} onChange={properties.eventCallback} />Bathing
    </label>
  </li>
  <li>
    <label>
        <input name="spend_time" type="checkbox" value="chatting" checked={properties.form.spend_time.chatting} onChange={properties.eventCallback} />Chatting
    </label>
  </li>
  <li>
    <label>
        <input name="spend_time" type="checkbox" value="no_time" checked={properties.form.spend_time.no_time} onChange={properties.eventCallback} />I don't like to spend time with it
    </label>
  </li>
</ul>
    )
}

export default Checkboxes
