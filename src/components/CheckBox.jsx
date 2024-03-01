import { useState } from "react"

function CheckBox({ onChange}){


    return(<>
<ul>
  <li>
    <label><input className="checkbox"
        name="spend-time"
        type="checkbox"
        value="swimming"
        onChange={(event)=>onChange(event)}
      />Swimming</label>
  </li>
  <li>
    <label
      ><input name="spend-time" className="checkbox" type="checkbox" value="bathing" 
      onChange={(event)=>onChange(event)}/>Bathing</label>
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        className="checkbox"
        type="checkbox"
        value="chatting"
        onChange={(event)=>{onChange(event)}}/>Chatting</label>
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" className="checkbox" value="noTime"  onChange={(event)=>onChange(event)}/>I don't like to
      spend time with it</label>
  </li>
</ul></>
)}

export default CheckBox