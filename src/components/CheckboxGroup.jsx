
function CheckboxGroup({formData, setFormData}) {
  return (
<ul>
  <li>
    <label>
        <input name="spend-time" type="checkbox" onChange={(change) => setFormData({...formData, swimming: change.target.checked})} 
        checked={formData.swimming}/>
        Swimming
    </label>
  </li>
  <li>
    <label>
        <input name="spend-time" type="checkbox" onChange={(change) => setFormData({...formData, bathing: change.target.checked})} 
        checked={formData.bathing} />
        Bathing
    </label>
  </li>
  <li>
    <label>
        <input name="spend-time" type="checkbox" onChange={(change) => setFormData({...formData, chatting: change.target.checked})} 
        checked={formData.chatting}/>
        Chatting
    </label>
  </li>
  <li>
    <label>
        <input name="spend-time" type="checkbox" onChange={(change) => setFormData({...formData, noTime: change.target.checked})} 
        checked={formData.noTime} />
        I don't like to spend time with it
    </label>
  </li>
</ul>
  )
}

export default CheckboxGroup