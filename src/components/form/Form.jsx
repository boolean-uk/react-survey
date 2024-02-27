import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadoButtons";


const Form = (props) => {
    
    const {setAnswersList, answersList} = props ?? {}

    const onSubmit = (event) => {
        event.preventDefault();
        let answerItem = {
            
        }
        for(let i = 0; i < event.target.length - 1; i++) {
            if(event.target[i].checked ) {
                if(event.target[i].name === "color")
                    answerItem.colour = event.target[i].value;
                
                }      
                
                if(event.target[i].name === "spend-time") {
                    answerItem.timeSpent = event.target[i].value;
                }

                if(event.target[i].name === "review") {
                    answerItem.review = event.target[i].value;
                }
                
                if(event.target[i].name === "username") {
                    answerItem.username = event.target[i].value;
                }


                event.target[i].value = "";
                event.target[i].checked = false;
        }

        setAnswersList([...answersList, answerItem])

    }


    // answerItem: { username, colour, timeSpent, review }

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
