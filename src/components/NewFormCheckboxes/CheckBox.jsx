import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import "../../App.css"

const CheckBox = ({labelText, dataObject, setDataObject, propertyId, propertySet, resetProperty}) => {
    const [checkedFields, setCheckedFields] = useState(propertySet)

    useEffect(() => {
        // Initialize checkedFields with keys from propertySet, setting all values to false
        const initialCheckedFields = Object.fromEntries(
          Object.keys(propertySet).map((key) => [key, false])
        );
    
        setCheckedFields(initialCheckedFields);
      }, [propertySet, resetProperty]);

    const handleCheckboxFieldChange = (propertyName) => {
        const updatedFields = {...checkedFields, [propertyName]: !checkedFields[propertyName]}
        setCheckedFields(updatedFields)
        const parentData = Object.keys(updatedFields).filter((key) => updatedFields[key]);
        setDataObject({...dataObject, [propertyId]: parentData})
    }

    return (
        <div className="form__group"> 
            {labelText} <br/>
            {Object.keys(propertySet).map((propertyName, index) => {
                return (
                    <label key={index}> 
                    <input type="checkbox" 
                        id={propertyId} 
                        value={checkedFields[index]} 
                        name={propertyId} 
                        checked={checkedFields[propertyName]}
                        onChange={() => handleCheckboxFieldChange(propertyName)}
                    />
                    {" " + propertySet[propertyName] + "  "}
                    </label>
                )
            })}
        </div>
    )
}

CheckBox.propTypes = {
    labelText: PropTypes.string,
    dataObject: PropTypes.object,
    setDataObject: PropTypes.func,
    propertyId: PropTypes.string,
    propertySet: PropTypes.object,
    resetProperty: PropTypes.bool,
}

export default CheckBox