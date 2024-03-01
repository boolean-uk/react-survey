import Checkboxes from './Checkboxes.jsx';
import RadioButtons from './Radio-buttons.jsx';


function Form (properties){

    const handleChange = (event) => {
        const inputName = event.target.name
        if (inputName === "review"){
            properties.setUserData({...properties.userData, review: event.target.value});
        }
        if (inputName === "username"){
            properties.setUserData({...properties.userData, username: event.target.value})
        }
        if (inputName === "email"){
            properties.setUserData({...properties.userData, email: event.target.value})
        }
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (properties.editingIndex !== null) {
            const updatedAnswers = properties.answers.map((item, index) => index === properties.editingIndex ? properties.userData : item);
            properties.setAnswers(updatedAnswers);
            properties.setEditingIndex(null);
        } else {
            properties.setAnswers([...properties.answers, properties.userData]);
        }
        properties.setUserData({
            ratingColor: '1',
            timeSpent: [],
            review: "",
            username: '',
            email: ''
        });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons userData={properties.userData} setUserData={properties.setUserData}/>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <Checkboxes userData={properties.userData} setUserData={properties.setUserData}/>
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    placeholder='Input thoughts here'
                    onChange={handleChange}
                    value={properties.userData.review}>
                </textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={properties.userData.username} />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={properties.userData.email}
                />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );
}
export default Form