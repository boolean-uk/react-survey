function RadioBtn(props){



    return(
<ul>
  <li>
    <input id="color-one" className="radio" type="radio" name="color" value="1"  onChange={(event)=>props.onChange(event)}/><label
      htmlFor="color-one"
      >1</label>
  </li>
  <li>
    <input id="color-two" className="radio" type="radio" name="color" value="2"  onChange={(event)=>props.onChange(event)}/><label
      htmlFor="color-two"
      >2</label>
  </li>
  <li>
    <input id="color-three" className="radio" type="radio" name="color" value="3"  onChange={(event)=>props.onChange(event)}/><label
      htmlFor="color-three"
      >3</label    >
  </li>
  <li>
    <input id="color-four" className="radio" type="radio" name="color" value="4" onChange={(event)=>props.onChange(event)}/><label
      htmlFor="color-four"
      >4</label>
  </li>
</ul>
)
}

export default RadioBtn