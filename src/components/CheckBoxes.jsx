import PropTypes from 'prop-types'

function CheckBoxes(props) {

  const handleChange = (e) => {
    if(e.target.checked) {
      props.setSurveyAnswers({...props.surveyAnswers, checkboxInput: [...props.surveyAnswers.checkboxInput , e.target.value]})
    } else {
      props.setSurveyAnswers({...props.surveyAnswers, checkboxInput: props.surveyAnswers.checkboxInput.filter((input) => input !== e.target.value)})
      
    }
  }

  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="swimming" onChange={(e) => handleChange(e)}/>
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="bathing" onChange={(e) => handleChange(e)}/>
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="chatting" onChange={(e) => handleChange(e)}/>
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="noTime" onChange={(e) => handleChange(e)}/>
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  )
}

CheckBoxes.propTypes = {
  surveyAnswers: PropTypes.object,
  setSurveyAnswers: PropTypes.func
};

export default CheckBoxes