import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  username: "",
  email: "",
  review: "",
  color: "",
  consistency: "",
  logo: "",
  features: [],
  nags: [],
  spendTime: [],
};

const initialReview = {
  username: "John",
  email: "John@Johnson.com",
  review: "I found the duck a little lacking.",
  color: "1",
  consistency: "2",
  logo: "1",
  features: [],
  nags: ["It's yellow!", "It squeaks!", "It has a logo!", "It's big!"],
  spendTime: ["I don't like to spend time with it"],
};
const initialAnswers = [initialReview];
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialFormData);
  const [answers, setAnswers] = useState(initialAnswers);

  const handleSubmit = (event) => {
    event.preventDefault();

    setAnswers([...answers, formData]);

    setFormData({ ...initialFormData });
  };

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);
    if (name !== undefined) {
      if (type === "checkbox") {
        if (checked === true) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: checked
              ? [...prevData[name], value]
              : prevData[name].filter((item) => item !== value),
          }));
        } else {
          formData[name] = formData[name].filter((item) => item !== value);
        }
      } else {
        setFormData((formData) => ({ ...formData, [name]: value }));
      }
    }
  };
  //
  console.log(formData);
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answers} />
      </section>
      <section className="survey__form">
        {/* a form should be here */}

        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleInputChange}
                    checked={formData.features.includes("It's yellow!")}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="It squeaks!"
                    onChange={handleInputChange}
                    checked={formData.features.includes("It squeaks!")}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleInputChange}
                    checked={formData.features.includes("It has a logo!")}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="It's big!"
                    onChange={handleInputChange}
                    checked={formData.features.includes("It's big!")}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>
              What would you say that are the worst nags of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="nags"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleInputChange}
                    checked={formData.nags.includes("It's yellow!")}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="nags"
                    type="checkbox"
                    value="It squeaks!"
                    onChange={handleInputChange}
                    checked={formData.nags.includes("It squeaks!")}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="nags"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleInputChange}
                    checked={formData.nags.includes("It has a logo!")}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="nags"
                    type="checkbox"
                    value="It's big!"
                    onChange={handleInputChange}
                    checked={formData.nags.includes("It's big!")}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={handleInputChange}
                  checked={formData.consistency === "1"}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={handleInputChange}
                  checked={formData.consistency === "2"}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={handleInputChange}
                  checked={formData.consistency === "3"}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={handleInputChange}
                  checked={formData.consistency === "4"}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleInputChange}
                  checked={formData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleInputChange}
                  checked={formData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleInputChange}
                  checked={formData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleInputChange}
                  checked={formData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={handleInputChange}
                  checked={formData.logo === "1"}
                />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  onChange={handleInputChange}
                  checked={formData.logo === "2"}
                />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  onChange={handleInputChange}
                  checked={formData.logo === "3"}
                />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  onChange={handleInputChange}
                  checked={formData.logo === "4"}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="Swimming"
                    onChange={handleInputChange}
                    checked={formData.spendTime.includes("Swimming")}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="Bathing"
                    onChange={handleInputChange}
                    checked={formData.spendTime.includes("Bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="Chatting"
                    onChange={handleInputChange}
                    checked={formData.spendTime.includes("Chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="I don't like to spend time with it"
                    onChange={handleInputChange}
                    checked={formData.spendTime.includes(
                      "I don't like to spend time with it"
                    )}
                  />
                  I don't like to spend time with it
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
              value={formData.review}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
