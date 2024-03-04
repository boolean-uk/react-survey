import PropTypes from "prop-types"

function RadioButtonComponent({survey, SetSurvey}) {
  return (
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" onChange={() => SetSurvey({ ...survey, color: 1 })}/>
              <label htmlFor="color-one">1</label>
            </li>
            
            <li>
              <input id="color-two" type="radio" name="color" value="2" onChange={() => SetSurvey({ ...survey, color: 2 })}/>
              <label htmlFor="color-two">2</label>
            </li>
            
            <li>
              <input id="color-three" type="radio" name="color" value="3" onChange={() => SetSurvey({ ...survey, color: 3 })}/>
              <label htmlFor="color-three">3</label>
            </li>
            
            <li>
              <input id="color-four" type="radio" name="color" value="4" onChange={() => SetSurvey({ ...survey, color: 4 })}/>
              <label htmlFor="color-four">4</label>
            </li>
          </ul>
        )
}

RadioButtonComponent.propTypes = {
    survey: PropTypes.object.isRequired, 
    SetSurvey: PropTypes.func.isRequired,
}

export default RadioButtonComponent