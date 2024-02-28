import { useState, useEffect } from 'react'
import "../App.css"
import PropTypes from "prop-types"
import CheckBox from "./NewFormCheckboxes/CheckBox.jsx"
import RadioButtons from "./NewFormRadio/RadioButtons.jsx"
import { propertySetQualities, propertySetTime, ratingScale } from "../constants.js"

const NewAnswer = ({template, addData}) => {
    const [dataObject, setDataObject] = useState(template)

    const handleFieldChange = (e) => {
        if (e.target.type === "radio") {
            setDataObject({...dataObject, [e.target.name]: e.target.value})
        } else {
            setDataObject({...dataObject, [e.target.id]: e.target.value})
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addData(dataObject)
        setDataObject(template)
    }

    useEffect(() => {
        setDataObject(template)
    }, [template])

    return (
    <form className="form">
        <h2>Tell us what you think about the rubber duck.</h2>
        <CheckBox 
            labelText={"What would you say are the best features of your rubber duck?"}
            dataObject={dataObject}
            setDataObject={setDataObject}
            propertyId={"bestFeatures"}
            propertySet={propertySetQualities}
        />
        <CheckBox 
            labelText={"What would you say that are the worst nags of your rubber duck?"}
            dataObject={dataObject}
            setDataObject={setDataObject}
            propertyId={"nagFeatures"}
            propertySet={propertySetQualities}
        />
        <RadioButtons 
            labelText={"How do you rate your rubber duck consistency?"}
            propertyId={"consistencyRating"}
            handleFieldChange={handleFieldChange}
            ratingsScale={ratingScale}
            dataObject={dataObject}
        />
        <RadioButtons 
            labelText={"How do you rate your rubber duck colour?"}
            propertyId={"colourRating"}
            handleFieldChange={handleFieldChange}
            ratingsScale={ratingScale}
            dataObject={dataObject}
        />
        <RadioButtons 
            labelText={"How do you rate your rubber duck logo?"}
            propertyId={"duckRating"}
            handleFieldChange={handleFieldChange}
            ratingsScale={ratingScale}
            dataObject={dataObject}
        />
        <CheckBox 
            labelText={"How do you like to spend time with your rubber duck?"}
            dataObject={dataObject}
            setDataObject={setDataObject}
            propertyId="timeSpent"
            propertySet={propertySetTime}
        />
        <label>
            What else have you got to say about your rubber duck?
            <textarea type="text" id="review" value={dataObject["review"]} cols="30"
      rows="10" onChange={(e) => handleFieldChange(e)} />
        </label>
        <label>
            Put your name here (if you want to).
            <input id="username" type="text" value={dataObject["username"]} onChange={(e) => handleFieldChange(e)}/>
        </label>
        <label>
            Give us your email!
            <input id="submitterEmail" type="email" value={dataObject["submitterEmail"]} onChange={(e) => handleFieldChange(e)}/>
        </label>
        <input className="form-submit" type="submit" value="Submit" onClick={(e) => handleSubmit(e)}/>
    </form>
    )
}

NewAnswer.propTypes = {
    addData: PropTypes.func,
    template: PropTypes.object,
}

export default NewAnswer