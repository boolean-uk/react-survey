import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadoButtons";


const Form = () => {


    const onSubmit = (event) => {
        event.preventDefault();
        for(let i = 0; i < event.target.length - 1; i++) {
            console.log(event.target[i].value)
        }
    }

    return (
        
        <form className="form" onSubmit={onSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons />
            </div>
            <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxes />
            </div>
            <label
            >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
            ></textarea></label>
            <label
            >Put your name here (if you feel like it):<input
                type="text"
                name="username"/></label>
            <label
            >Leave us your email pretty please??<input
                type="email"
                name="email"/></label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

export default Form;
