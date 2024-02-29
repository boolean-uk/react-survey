import PropTypes from 'prop-types'

function RadioButtons(props) {

  const handleChange = (e) => {
    props.setSurveyAnswers({...props.surveyAnswers, radioInput: e.target.value})
  }

  return (
  <ul>
    <li>
      <input id="color-one" type="radio" name="color" value="1" onChange={(e) => handleChange(e)}/>
      <label htmlFor="color-one">1</label>
    </li>
    <li>
      <input id="color-two" type="radio" name="color" value="2" onChange={(e) => handleChange(e)}/>
      <label htmlFor="color-two">2</label>
    </li>
    <li>
      <input id="color-three" type="radio" name="color" value="3" onChange={(e) => handleChange(e)}/>
      <label htmlFor="color-three">3</label>
    </li>
    <li>
      <input id="color-four" type="radio" name="color" value="4" onChange={(e) => handleChange(e)}/>
      <label htmlFor="color-four">4</label>
    </li>
  </ul>
  )
}

RadioButtons.propTypes = {
  surveyAnswers: PropTypes.object,
  setSurveyAnswers: PropTypes.func
};

export default RadioButtons