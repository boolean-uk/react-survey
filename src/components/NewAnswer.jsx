import { useState } from 'react'
import "../App.css"
import PropTypes from "prop-types"
import CheckBox from "./NewFormCheckboxes/CheckBox.jsx"
import RadioButtons from "./NewFormRadio/RadioButtons.jsx"

const propertySetTime = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it"
  };

  const propertySetQualities = {
    color: "It's yellow!",
    sound: "It squeaks!",
    logo: "It has a logo!",
    size: "It's big!"
}

const ratingScale = [1,2,3,4]

const defaultObject = {
    bestFeatures: [],
    nagFeatures: [],
    timeSpent: [],
    consistencyRating: "",
    colourRating: "",
    duckRating: "",
    username: "",
    review: "",
    submitterEmail: "",
}

const NewAnswer = ({submittedForms, setSubmittedForms}) => {
    const [dataObject, setDataObject] = useState(defaultObject)
    const [resetProperty, setResetProperty] = useState(false)

    const handleFieldChange = (e) => {
        if (e.target.type === "radio") {
            setDataObject({...dataObject, [e.target.name]: e.target.value})
        } else {
            setDataObject({...dataObject, [e.target.id]: e.target.value})
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedForms([dataObject, ...submittedForms])
        setResetProperty(!resetProperty)
        setDataObject(defaultObject)
    }

    return (
    <form className="form">
        <h2>Tell us what you think about the rubber duck.</h2>
        <CheckBox 
            labelText={"What would you say are the best features of your rubber duck?"}
            dataObject={dataObject}
            setDataObject={setDataObject}
            propertyId={"bestFeatures"}
            propertySet={propertySetQualities}
            resetProperty={resetProperty}
        />
        <CheckBox 
            labelText={"What would you say that are the worst nags of your rubber duck?"}
            dataObject={dataObject}
            setDataObject={setDataObject}
            propertyId={"nagFeatures"}
            propertySet={propertySetQualities}
            resetProperty={resetProperty}
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
            resetProperty={resetProperty}
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
    submittedForms: PropTypes.array, 
    setSubmittedForms: PropTypes.func,
}

export default NewAnswer