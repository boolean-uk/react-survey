import PropTypes from "prop-types";
import CapitalizeService from "../service/CapitalizeService";

function CheckboxComponent({ survey, SetSurvey, value, text = CapitalizeService(value) }){
  function handleCheckboxInputChange() {
    SetSurvey(prevSurvey => {
      const isValueIncluded = prevSurvey.timeSpent.includes(value)
      const updatedTimeSpent = isValueIncluded ? 
        prevSurvey.timeSpent.filter(item => item !== value) : [...prevSurvey.timeSpent, value]

      const updatedSurvey = { ...prevSurvey, timeSpent: updatedTimeSpent }
      console.log(updatedSurvey)
      return updatedSurvey
    })
  }
  const isValueIncluded = survey.timeSpent?.includes(value) ?? false

  return (
      <li>
        <label>
          <input name="spend-time" type="checkbox" value={isValueIncluded} onChange={handleCheckboxInputChange}/>
          {text}
        </label>
      </li>
  )
}

CheckboxComponent.propTypes = {
    survey: PropTypes.object.isRequired, 
    SetSurvey: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default CheckboxComponent