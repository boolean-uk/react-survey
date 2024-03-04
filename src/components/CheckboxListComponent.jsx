import PropTypes from "prop-types";
import CheckboxComponent from "./CheckboxComponent";

function CheckboxListComponent({survey, SetSurvey}) {
    return (
          <ul>
            <CheckboxComponent survey={survey} SetSurvey={SetSurvey} value="swimming"/>
            <CheckboxComponent survey={survey} SetSurvey={SetSurvey} value="bathing"/>
            <CheckboxComponent survey={survey} SetSurvey={SetSurvey} value="chatting"/>
            <CheckboxComponent survey={survey} SetSurvey={SetSurvey} value="noTime" text="I don't like to spend time with it" />
          </ul>
    )
}

CheckboxListComponent.propTypes = {
    survey: PropTypes.object.isRequired, 
    SetSurvey: PropTypes.func.isRequired,
}

export default CheckboxListComponent