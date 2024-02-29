import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import "../../App.css"

const CheckBox = ({labelText, dataObject, setDataObject, propertyId, propertySet}) => {
    const [checkedFields, setCheckedFields] = useState(dataObject[propertyId])

    const handleCheckboxFieldChange = (propertyName) => {
        const updatedFields = {...checkedFields, [propertyName]: !checkedFields[propertyName]}
        setCheckedFields(updatedFields)
        const parentData = updatedFields;
        setDataObject({...dataObject, [propertyId]: parentData})
    }

    useEffect(() => {
        setCheckedFields(dataObject[propertyId])
    }, [dataObject, propertyId])
    
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
}

export default CheckBox