import { useEffect, useState } from "react";
import RadioButtonRating from "./FormItems/RadioButtonRating";
import CheckBoxGroup from "./FormItems/CheckboxGroup";
import { spendTimeAnswerOptions, ratingAnswerOptions } from "@/misc/Consts"

function Form() {
    const [rating, setRating] = useState(-1)
    const [timeSpendingPreferences, setTimeSpendingPreferences] = useState([])
    const [additionalRemarks, setAdditionalRemarks] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [validation, setValidation] = useState({ isValidRating: false, isValidName: false, isValidEmail: false, isValidTimeSpendingPreferences: false, hasSubmitted: false, isSubmitting: false })

    const handleSubmitRequest = (event) => {
        event.preventDefault();
        validateInput(true)
    }

    const submit = () => {
        console.log("SUBMITTED")
    }

    const validateInput = (isSubmitting = false) => {
        setValidation({
            isValidRating: isValidRating(),
            isValidName: isValidName(),
            isValidEmail: isValidEmail(),
            isValidTimeSpendingPreferences: isValidTimeSpendingPreferences(),
            isSubmitting: isSubmitting,
            hasSubmitted: validation.hasSubmitted || isSubmitting
        });
    };

    const isValidRating = () => {
        return ratingAnswerOptions.includes(rating);
    };

    const isValidTimeSpendingPreferences = () => {
        timeSpendingPreferences.forEach(item => {
            if (!Object.keys(spendTimeAnswerOptions).includes(item)) return false;
        })
        return true;
    }

    const isValidName = () => {
        return name.length > 1
    }

    const isValidEmail = () => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    useEffect(() => {
        if (Object.values(validation).every(value => value === true)) {
            submit();
        }
    }, [validation])

    useEffect(() => {
        validateInput()
    }, [rating, timeSpendingPreferences, name, email])

    return (
        <form className="form" onSubmit={handleSubmitRequest}>
            <RadioButtonRating title="How do you rate your rubber duck colour?" options={ratingAnswerOptions} onChange={setRating} leftLabel="It's garbage" rightLabel="Love it!" isValid={(validation.isValidRating || !validation.hasSubmitted)} />
            <CheckBoxGroup title="How do you like to spend time with your rubber duck?" options={spendTimeAnswerOptions} onChange={setTimeSpendingPreferences} />
            <label>
                <h3>What else have you got to say about your rubber duck?</h3>
                <textarea name="review" rows="10" onChange={(e) => setAdditionalRemarks(e.target.value)}></textarea>
            </label>
            <label>
                <h3 className={(validation.isValidName || !validation.hasSubmitted) ? "" : "invalid"}>Put your name here (if you feel like it):</h3>
                <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label >
                <h3 className={(validation.isValidEmail || !validation.hasSubmitted) ? "" : "invalid"}>Leave us your email pretty please??</h3>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}

export default Form;
