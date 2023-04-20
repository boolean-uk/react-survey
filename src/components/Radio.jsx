import React from "react";

function Radio({ formData, setFormData }) {

  const handleChange = (e) => {
    const newData = {...formData}
    newData.colour = e.target.value
    setFormData(newData)
  }

  return (
    <div>
      <ul>
        <li>
          <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={formData.colour === '1'}/>
          <label htmlFor="color-one">1</label>
        </li>
        <li>
          <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={formData.colour === '2'} />
          <label htmlFor="color-two">2</label>
        </li>
        <li>
          <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={formData.colour === '3'} />
          <label htmlFor="color-three">3</label>
        </li>
        <li>
          <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={formData.colour === '4'} />
          <label htmlFor="color-four">4</label>
        </li>
      </ul>
    </div>
  );
}

export default Radio;
