function RadioButtons(properties) {
    return (
        <ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" checked={properties.form.color == 1} onChange={properties.eventCallback} />
    <label htmlFor="color-one">1</label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" checked={properties.form.color == 2} onChange={properties.eventCallback} />
    <label htmlFor="color-two">2</label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3" checked={properties.form.color == 3} onChange={properties.eventCallback} />
    <label htmlFor="color-three">3</label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" checked={properties.form.color == 4} onChange={properties.eventCallback} />
    <label htmlFor="color-four">4</label>
  </li>
</ul>
    )
}

export default RadioButtons
