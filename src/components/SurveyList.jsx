import FormComponent from "./FormComponent"
import PropTypes from "prop-types"

function SurveyListComponent({ SetSurveyList }) {
  return (
    FormComponent()
  )
}

SurveyListComponent.propTypes = {
    SetSurveyList: PropTypes.func.isRequired,
  };
export default SurveyListComponent