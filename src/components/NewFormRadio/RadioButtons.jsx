import PropTypes from "prop-types"
import "./RadioButtons.css"

const RadioButtons = ({labelText, propertyId, ratingsScale, dataObject, handleFieldChange}) => {
    return (
        <div className="form__group radio">
            <p>{labelText}</p>
            {ratingsScale.map((index) => {
                return (
                    <label key={"label"+index}>
                        <input 
                            key={index}
                            type="radio" 
                            id={index}
                            name={propertyId} 
                            value={index} 
                            checked={dataObject[propertyId] === index.toString()}
                            onChange={(e) => handleFieldChange(e)}
                        />
                        {index}
                    </label>
                )
            })}
        </div>
    )
}

RadioButtons.propTypes = {
    labelText: PropTypes.string,
    propertyId: PropTypes.string,
    ratingsScale: PropTypes.array,
    dataObject: PropTypes.object,
    handleFieldChange: PropTypes.func,
}

export default RadioButtons