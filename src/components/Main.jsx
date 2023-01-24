import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormState = {
    color: "",
    time: "",
    review: "",
    username: "",
    email: ""
}

function Main() {
    const [open, setOpen] = useState(false); //Ignore this state

    const [formState, setFormState] = useState({...initialFormState})
    const [answersList, setAnswersList] = useState([])

    const handleChange = (event) => {
        const value = event.target.value;
        const type = event.target.type;
        const name = event.target.name;
        const checked = event.target.checked;

        const newFormState = {...formState}

        if(name === "color") {
            newFormState.color = value
        }
        if(name === "spend-time" && checked === true) {
            newFormState.time = value   
        }
        if(name === "spend-time" && checked === false) {
            newFormState.time = ""
        }
        if(name === "review") {
            newFormState.review = value
        }
        if(name === "username") {
            newFormState.username = value
        }
        if(name === "email") {
            newFormState.email = value
        }

        setFormState(newFormState)
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newAnswersList = [...answersList, formState]
        setAnswersList(newAnswersList)
        setFormState({...initialFormState})
    }

  return (
    <main className="main">
        <section className={`main__list ${open ? "open" : ""}`}>
            <h2>Answers list</h2>
            <AnswersList 
            answersList={answersList}
            />
        </section>
        <section className="main__form">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Tell us what you think about your rubber duck!</h2>
                <div className="form__group radio">
                    <h3>How do you rate your rubber duck colour?</h3>
                    <ul>
                        <li>
                            <input 
                                id="color-one" 
                                type="radio" 
                                name="color" 
                                value="1" 
                                onChange={handleChange}
                                checked={formState.color === "1"}
                                />
                            <label htmlFor="color-one">1</label>
                        </li>
                        <li>
                            <input 
                                id="color-two" 
                                type="radio" 
                                name="color" 
                                value="2" 
                                onChange={handleChange}
                                checked={formState.color === "2"}
                                />
                            <label  htmlFor="color-two">2</label>
                        </li>
                        <li>
                            <input 
                                id="color-three" 
                                type="radio" 
                                name="color" 
                                value="3" 
                                onChange={handleChange}
                                checked={formState.color === "3"}
                                />
                            <label htmlFor="color-three">3</label>
                        </li>
                        <li>
                            <input 
                                id="color-four" 
                                type="radio" 
                                name="color" 
                                value="4" 
                                onChange={handleChange}
                                checked={formState.color === "4"}
                                />
                            <label htmlFor="color-four">4</label>
                        </li>
                    </ul>
                </div>
                <div className="form__group">
                    <h3>How do you like to spend time with your rubber duck</h3>
                    <ul>
                        <li>
                            <label>
                                <input
                                    name="spend-time"
                                    type="checkbox"
                                    value="swimming"
                                    onChange={handleChange}
                                    checked={formState.time === "swimming"}
                                />
                                Swimming
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    name="spend-time" 
                                    type="checkbox" 
                                    value="bathing" 
                                    onChange={handleChange}
                                    checked={formState.time === "bathing"}
                                />
                                Bathing
                                </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    name="spend-time"
                                    type="checkbox"
                                    value="chatting"
                                    onChange={handleChange}
                                    checked={formState.time === "chatting"}
                                />
                                Chatting
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    name="spend-time" 
                                    type="checkbox" 
                                    value="noTime" 
                                    onChange={handleChange}
                                    checked={formState.time === "noTime"}
                                />
                                I don't like to
                                spend time with it
                            </label>
                        </li>
                    </ul>
                </div>
                <label>
                    What else have you got to say about your rubber duck?
                    <textarea
                        name="review"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </label>
                <label>
                    Put your name here (if you feel like it):
                    <input
                        type="text"
                        name="username"
                        value={formState.username}
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Leave us your email pretty please??
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange} 
                    />
                </label>
                <input className="form__submit" type="submit" value="Submit Survey!" />
            </form>
        </section>
    </main>
  );
}

export default Main;
