import { useState } from "react";
import RadioButtonRating from "./FormItems/RadioButtonRating";
import CheckBoxGroup from "./FormItems/CheckboxGroup";
import {spendTimeAnswerOptions, ratingAnswerOptions} from "@/misc/Consts"

function Form() {
    const [rating, setRating] = useState(-1)
    const [timeSpendingPreferences, setTimeSpendingPreferences] = useState([])
    const [additionalRemarks, setAdditionalRemarks] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(rating, timeSpendingPreferences, additionalRemarks, name, email);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <RadioButtonRating title="How do you rate your rubber duck colour?" options={ratingAnswerOptions} onChange={setRating} leftLabel="It's garbage" rightLabel="Love it!" />
        <CheckBoxGroup title="How do you like to spend time with your rubber duck?" options={spendTimeAnswerOptions} onChange={setTimeSpendingPreferences} />
        <label>
            <h3>What else have you got to say about your rubber duck?</h3>
            <textarea name="review" rows="10" onChange={(e) => setAdditionalRemarks(e.target.value)}></textarea>
        </label>
        <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}

export default Form;
