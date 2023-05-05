import Checkboxes from './Checkboxes'
import Radio from './Radio'


export default function Form({formState, setFormState, resetForm, initialFormData}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        // resetForm()
        setFormState(initialFormData)
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        console.log('e.target', e.target.value)
        if (type === 'checkbox' && name === 'activity') {
            setFormState({...formState, [value]: checked})
        } else {
            setFormState({...formState, [name]: value})
        }
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>

                <h2>Tell us what you think about your rubber duck!</h2>

                <div className="form__group radio">
                    <h3>How do you rate your rubber duck colour?</h3>
                        <Radio 
                            handleChange={handleChange}
                            formState={formState}
                            />
                </div>

                <div className="form__group">
                    <h3>How do you like to spend time with your rubber duck</h3>
                        <Checkboxes 
                            handleChange={handleChange}
                            formState={formState}
                            />
                </div>

                <label>What else have you got to say about your rubber duck?
                    <textarea
                        onChange={handleChange}
                        name="review"
                        cols="30"
                        rows="10"
                        value={formState.review}
                    >
                    </textarea>
                </label>

                <label>Put your name here (if you feel like it):
                    <input
                        onChange={handleChange}
                        type="text"
                        name="username"
                        value={formState.username}/>
                </label>

                <label>Leave us your email pretty please??
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={formState.email}
                    />
                </label>

                <input
                    className="form__submit"
                    type="submit"
                    value="Submit Survey!"
                />

            </form>
        </>
    )
}