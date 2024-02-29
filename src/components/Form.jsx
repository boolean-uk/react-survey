import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RadioButtonRating from "./FormItems/RadioButtonRating";
import CheckBoxGroup from "./FormItems/CheckboxGroup";
import { SPEND_TIME_ANSWER_OPTIONS, RATING_ANSWER_OPTIONS, INITIAL_FORM_VALUES} from "@/misc/Consts"

function Form({submit}) {
    const [rating, setRating] = useState(INITIAL_FORM_VALUES.rating)
    const [timeSpendingPreferences, setTimeSpendingPreferences] = useState(INITIAL_FORM_VALUES.timeSpendingPreferences)
    const [additionalRemarks, setAdditionalRemarks] = useState(INITIAL_FORM_VALUES.additionalRemarks)
    const [name, setName] = useState(INITIAL_FORM_VALUES.name)
    const [email, setEmail] = useState(INITIAL_FORM_VALUES.email)
    const [validation, setValidation] = useState(INITIAL_FORM_VALUES.validation)

    const handleSubmitRequest = (event) => {
        event.preventDefault();
        validateInput(true)
    }

    const submitForm = () => {
        const submission = {username: name, email: email, colourRating: rating, timeSpent: timeSpendingPreferences, review: additionalRemarks}
        console.log("SUBMITTING:", submission)
        submit(submission)
        resetForm()
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
        return RATING_ANSWER_OPTIONS.includes(rating);
    };

    const isValidTimeSpendingPreferences = () => {
        timeSpendingPreferences.forEach(item => {
            if (!Object.keys(SPEND_TIME_ANSWER_OPTIONS).includes(item)) return false;
        })
        return true;
    }

    const isValidName = () => {
        return true
    }

    const isValidEmail = () => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const resetForm = () => {
        setRating(INITIAL_FORM_VALUES.rating);
        setTimeSpendingPreferences(INITIAL_FORM_VALUES.timeSpendingPreferences);
        setAdditionalRemarks(INITIAL_FORM_VALUES.additionalRemarks);
        setName(INITIAL_FORM_VALUES.name);
        setEmail(INITIAL_FORM_VALUES.email);
        setValidation(INITIAL_FORM_VALUES.validation);
    }

    useEffect(() => {
        validateInput()
    }, [rating, timeSpendingPreferences, name, email])

    useEffect(() => {
        if (Object.values(validation).every(value => value === true)) {
            submitForm();
        }
    }, [validation])

    return (
        <>
        <h2 className="module_header">Review</h2>
        <form className="form" onSubmit={handleSubmitRequest}>
            <RadioButtonRating title="How do you rate your rubber duck colour?" options={RATING_ANSWER_OPTIONS} value={rating} onChange={setRating} leftLabel="Room for improvement" rightLabel="I love it!" isValid={(validation.isValidRating || !validation.hasSubmitted)} />
            <CheckBoxGroup title="How do you like to spend time with your rubber duck?" options={SPEND_TIME_ANSWER_OPTIONS} values={timeSpendingPreferences} onChange={setTimeSpendingPreferences} />
            <label>
                <h3>What else have you got to say about your rubber duck?</h3>
                <textarea name="review" rows="5" onChange={(e) => setAdditionalRemarks(e.target.value)}></textarea>
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
        </>
    );
}

Form.propTypes = {
    submission: PropTypes.func
}

export default Form;
