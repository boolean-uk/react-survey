import PropTypes from 'prop-types';

function Buttons(props) {

  const{handleChange, colour, setColour} = props

  return (
    <ul>
      <li>
        <input 
        id="color-one" 
        type="radio" 
        name="color" 
        value="1" 
        checked={colour === 1} 
        onChange={(x) => handleChange(x, setColour)}
        /><label htmlFor="color-one" >1</label>
      </li>
      <li>
        <input 
        id="color-two"
        type="radio" 
        name="color" 
        value="2" 
        checked={colour === 2} 
        onChange={(x) => handleChange(x, setColour)}
        /><label htmlFor="color-two" >2</label>
      </li>
      <li>
        <input 
        id="color-three" 
        type="radio" 
        name="color" 
        value="3" 
        checked={colour === 3} 
        onChange={(x) => handleChange(x, setColour)}
        /><label htmlFor="color-three" >3</label>
      </li>
      <li>
        <input 
        id="color-four" 
        type="radio" 
        name="color" 
        value="4" 
        checked={colour === 4} 
        onChange={(x) => handleChange(x, setColour)}
        /><label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}

Buttons.propTypes = {
  handleChange: PropTypes.func,
  colour: PropTypes.number,
  setColour: PropTypes.func
}

export default Buttons;
