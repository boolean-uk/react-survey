import  { useState } from "react";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);

  const [rating, setRating] = useState("");
  const [activities, setActivities] = useState([]);
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  
 

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (activities.includes(value)) {
      setActivities(activities.filter((activity) => activity !== value));
    } else {
      setActivities([...activities, value]);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const answer = {
      rating: rating,
      activities: activities,
      review: review,
      username: username,
      email: email,
    };

    setAnswers([...answers, answer]);

    // Reset form fields
    setRating("");
    setActivities([]);
    setReview("");
    setUsername("");
    setEmail("");
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {answers.map((answer, index) => (
          <AnswersItem key={index} answer={answer} />
        ))}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>



          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>


            <label htmlFor="rating">1 <input type="radio" /></label>
            <label htmlFor="rating">2 <input type="radio" /></label>
            <label htmlFor="rating">3 <input type="radio" /></label>
            <label htmlFor="rating">4 <input type="radio" /></label>
          </div>


          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

          
          
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={email}  // Set the value prop to the email state
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      </section>
    </main>
  );
}

export default Survey;
