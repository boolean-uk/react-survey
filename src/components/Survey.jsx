import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

export default function Survey() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [duckActivities, setDuckActivities] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  });
  const [bestFeatures, setBestFeatures] = useState({
    yellow: false,
    squeaks: false,
    logo: false,
    noTime: false
  });
  const [worstBits, setWorstBits] = useState({
    yellow: false,
    squeaks: false,
    logo: false,
    noTime: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedAnswer = {
      formData,
      duckActivities,
      bestFeatures,
      worstBits
    };
    setSubmittedAnswers([...submittedAnswers, submittedAnswer]);
    console.log(submittedAnswer);
    setFormData(initialFormData);
    setDuckActivities({
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    });
    setBestFeatures({
      yellow: false,
      squeaks: false,
      logo: false,
      noTime: false
    });
    setWorstBits({
      yellow: false,
      squeaks: false,
      logo: false,
      noTime: false
    });
  };


  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setDuckActivities({ ...duckActivities, [name]: checked });
  };

  const handleBestFeaturesCheck = (event) => {
    const { name, checked } = event.target;
    setBestFeatures({ ...bestFeatures, [name]: checked });
  };

  const handleWorstBitsCheck = (event) => {
    const { name, checked } = event.target;
    setWorstBits({ ...worstBits, [name]: checked });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={submittedAnswers}  />
      </section>
      <section className="survey__form">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
          
      <div className="form__group">
            <h3>What would you say are the best features of your rubber duck?</h3>
            <ul>
              {Object.entries(bestFeatures).map(([feature, checked]) => (
                <li key={feature}>
                  <label>
                    <input
                      name={feature}
                      type="checkbox"
                      checked={checked}
                      onChange={handleBestFeaturesCheck}
                    />
                    {feature === "noTime" ? "I do not like to spend time with it" : feature}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="form__group">
            <h3>What would you say are the worst bits of your rubber duck?</h3>
            <ul>
              {Object.entries(worstBits).map(([bit, checked]) => (
                <li key={bit}>
                  <label>
                    <input
                      name={bit}
                      type="checkbox"
                      checked={checked}
                      onChange={handleWorstBitsCheck}
                    />
                    {bit === "noTime" ? "I do not like to spend time with it" : bit}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        
        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  id={`consistency${value}`}
                  name="consistency"
                  type="radio"
                  value={value}
                  onChange={handleChange}
                  checked={formData.consistency === value}
                />
                <label htmlFor={`consistency${value}`}>{value}</label>
              </>
            ))}
        </div>
        
        
        <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  id={`colour${value}`}
                  name="colour"
                  type="radio"
                  value={value}
                  onChange={handleChange}
                  checked={formData.colour === value}
                />
                <label htmlFor={`colour${value}`}>{value}</label>
              </>
            ))}
        </div>

        <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  id={`logo${value}`}
                  name="logo"
                  type="radio"
                  value={value}
                  onChange={handleChange}
                  checked={formData.logo === value}
                />
                <label htmlFor={`logo${value}`}>{value}</label>
              </>
            ))}
        </div>

        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul>
            {Object.entries(duckActivities).map(([activity, checked]) => (
              <li key={activity}>
                <label>
                  <input
                    name={activity}
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheck}
                  />
                  {activity === "noTime" ? "I do not like to spend time with it" : activity}
                </label>
              </li>
            ))}
          </ul>
        </div>
            
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
                onChange={handleChange}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            </label
        ><label
          >Leave us your email pretty please??
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  )
}