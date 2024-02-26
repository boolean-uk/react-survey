import { useState } from "react";
import AnswersList from "../components/AnswersList";

const INITIAL_FORM_DATA = {
  bestFeature: {
    "best-color": false,
    "best-squeak": false,
    "best-logo": false,
    "best-size": false,
  },
  worstFeature: {
    "worst-color": false,
    "worst-squeak": false,
    "worst-logo": false,
    "worst-size": false,
  },
  timeSpent: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  },
  consistency: "",
  color: "",
  logo: "",
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });
  const [answerList, setToAnswerList] = useState([]);

  //TODO: Add your state fields here
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);
    //                      name: bestFeature tpye: checkbox value: logo checked: true

    if (name !== undefined) {
      if (type === "checkbox") {
        console.log("is current-data?: ", formData[name]);
        console.log("is column of changed value?: ", value);

        // bestFeature
        setFormData({
          ...formData,
          [name]: { ...formData[name], [value]: checked },
        });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleEdit = (event, data) => {
    console.log("event is: ", event);
    console.log("data: ", data[0]);
    setFormData({ ...data[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setToAnswerList([...answerList, formData]);

    setFormData({ ...INITIAL_FORM_DATA });
    // document.querySelector("checkbox").checked = false;
  };

  return (
    <main id="formContent" className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answerList} handleEdit={handleEdit} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group">
            <h3>
              What would you say are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="bestFeature"
                    type="checkbox"
                    value="best-color"
                    checked={formData.bestFeature["best-color"]}
                    onChange={(e) => {
                      handleInputChange;
                    }}
                  />
                  Its yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeature"
                    type="checkbox"
                    value="best-squeak"
                    checked={formData.bestFeature["best-squeak"]}
                    onChange={handleInputChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeature"
                    type="checkbox"
                    value="best-logo"
                    checked={formData.bestFeature["best-logo"]}
                    onChange={handleInputChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeature"
                    type="checkbox"
                    value="best-size"
                    checked={formData.bestFeature["best-size"]}
                    onChange={handleInputChange}
                  />
                  Its big!
                </label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>
              What would you say are the worst features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="worstFeature"
                    type="checkbox"
                    value="worst-color"
                    checked={formData.worstFeature["worst-color"]}
                    onChange={handleInputChange}
                  />
                  Its yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeature"
                    type="checkbox"
                    value="worst-squeak"
                    checked={formData.worstFeature["worst-squeak"]}
                    onChange={handleInputChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeature"
                    type="checkbox"
                    value="worst-logo"
                    checked={formData.worstFeature["worst-logo"]}
                    onChange={handleInputChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeature"
                    type="checkbox"
                    value="worst-size"
                    checked={formData.worstFeature["worst-size"]}
                    onChange={handleInputChange}
                  />
                  Its big!
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
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={formData.timeSpent["swimming"]}
                    onChange={handleInputChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={formData.timeSpent["bathing"]}
                    onChange={handleInputChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="chatting"
                    checked={formData.timeSpent["chatting"]}
                    onChange={handleInputChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={formData.timeSpent["noTime"]}
                    onChange={handleInputChange}
                  />
                  I dont like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              id="review"
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
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              id="email"
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
