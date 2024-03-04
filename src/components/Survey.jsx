import React, { useState } from 'react';

function Survey() {
  const initialFormData = {
    color: "",
    time: [],
    review: "",
    username: "",
    email: "",
    terms: false
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle different input types
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the current form data to the submittedAnswers array
    setSubmittedAnswers([...submittedAnswers, formData]);

    // Reset form data
    setFormData(initialFormData);
  };

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
        {submittedAnswers.length > 0 ? (
          <ul>
            {submittedAnswers.map((answer, index) => (
              <li key={index}>
                <p><strong>Color:</strong> {answer.color}</p>
                <p><strong>Time:</strong> {answer.time.join(', ')}</p>
                <p><strong>Review:</strong> {answer.review}</p>
                <p><strong>Username:</strong> {answer.username}</p>
                <p><strong>Email:</strong> {answer.email}</p>
                <p><strong>Terms:</strong> {answer.terms ? 'Accepted' : 'Not Accepted'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No answers submitted yet.</p>
        )}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {[1, 2, 3, 4].map((value) => (
                <li key={value}>
                  <input
                    id={`color-${value}`}
                    type="radio"
                    name="color"
                    value={value}
                    onChange={handleInputChange}
                    checked={formData.color === value.toString()}
                  />
                  <label htmlFor={`color-${value}`}>{value}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {["Swimming", "Bathing", "Chatting", "NoTime"].map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      name="time"
                      type="checkbox"
                      value={activity}
                      onChange={handleInputChange}
                      checked={formData.time.includes(activity)}
                    />
                    {activity}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                value={formData.review}
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <div className="form__group">
            <label>
              Put your name here (if you feel like it):
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form__group">
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form__group">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
              />
              Accept Terms and Conditions
            </label>
          </div>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
