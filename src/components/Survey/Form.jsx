import { useEffect, useState } from "react"
import RadioButtonsComponent from "./Form/RadioButtons"
import SpendTimeComponent from "./Form/SpendTime"

let keyCount = 0

function FormComponent({ surveys, setSurveys, survey, setSurvey }) {
    useEffect(() => {
        console.log(surveys)
    }, [surveys])

    function NameChanged(e) {
        setSurvey({
            ...survey,
            name: e.target.value
        })
    }

    function EmailChanged(e) {
        setSurvey({
            ...survey,
            email: e.target.value
        })
    }

    function CommentChanged(e) {
        setSurvey({
            ...survey,
            comment: e.target.value
        })
    }

    function SubmitForm(e) {
        e.preventDefault()
        //console.log(survey.key)
        console.log(keyCount)
        if (!surveys.some(s => survey.key == s.key)) {
            //add survey to list
            setSurveys([
                ...surveys, survey
            ])
            //wipe survey values
            keyCount++

            setSurvey({
                key: keyCount,
                name: "",
                email: "",
                colorRating: 0,
                spendingTime: [],
                comment: "",
            })
        } else {
            const newSurveys = [...surveys]
            const key = newSurveys.findIndex(s => survey.key == s.key)
            newSurveys[key] = survey
            setSurveys(newSurveys)

            setSurvey({
                key: keyCount,
                name: "",
                email: "",
                colorRating: 0,
                spendingTime: [],
                comment: "",
            })
        }

    }

    return (
        <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtonsComponent survey={survey} setSurvey={setSurvey} />
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <SpendTimeComponent survey={survey} setSurvey={setSurvey} />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    onChange={CommentChanged}
                    value={survey.comment}
                />
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    onChange={NameChanged}
                    value={survey.name}
                />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    onChange={EmailChanged}
                    value={survey.email}
                />
            </label>
            <input
                className="form__submit"
                type="submit"
                value="Submit Survey!"
                onClick={SubmitForm} />
        </form>
    )
}

export default FormComponent