import PropTypes from 'prop-types'
import CheckBoxes from "./checkboxes";
import Radio from "./radio";

export default function Form({ answer, answers, setAnswer, setAnswers, edit, setEdit }) {

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();

                const uniqueEmail = !answers || !answers.some(a => a.email === answer.email)

                if (!uniqueEmail && !edit)
                {
                    alert("This email has already been used. Please use a different email.");
                    return;
                }

                if (!edit)
                {
                    setAnswers(prevState => [...prevState, answer])
                } else
                {
                    setAnswers(prevState => prevState.map(a => a.email === edit ? answer : a))
                    setEdit('');
                }

                setAnswer({ colour: '', spendTime: [], review: '', username: '', email: '' })
            }}
        >
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <Radio
                    answer={answer}
                    setAnswer={setAnswer}
                />
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxes
                    answer={answer}
                    setAnswer={setAnswer}
                />
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    value={answer.review}
                    onChange={(event) => {
                        setAnswer(prevState =>
                        ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }))
                    }}
                >
                </textarea>
            </label>
            <label>
                Put your name here (if you feel like it):<input
                    type="text"
                    name="username"
                    value={answer.username}
                    onChange={(event) => {
                        setAnswer(prevState =>
                        ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }))
                    }}
                />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={answer.email}
                    onChange={(event) => {
                        setAnswer(prevState =>
                        ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }))
                    }}
                />
            </label>
            <input
                className="form__submit"
                type="submit"
                value="Submit Survey!"
            />
        </form>
    )
}

Form.propTypes = {
    answers: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            colour: PropTypes.string,
            spendTime: PropTypes.arrayOf(PropTypes.string),
            review: PropTypes.string,
            email: PropTypes.string
        })
    )
    ,
    setAnswers: PropTypes.func,
    answer:
        PropTypes.shape(
            {
                username: PropTypes.string,
                colour: PropTypes.string,
                spendTime: PropTypes.arrayOf(PropTypes.string),
                review: PropTypes.string,
                email: PropTypes.string
            }
        ),
    setAnswer: PropTypes.func,
    edit: PropTypes.string,
    setEdit: PropTypes.func,

}