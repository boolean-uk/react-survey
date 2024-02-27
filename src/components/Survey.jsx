import { useState, useEffect } from "react";
import AnswersList from "../components/AnswersList";
import axios from "axios";
import React from "react";

const API_URL = "http://localhost:3000/ducks";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [resetData, setResetData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [answerList, setToAnswerList] = useState([]);
  const [toUpdate, setToUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setFormData(res.data[0]);
        setResetData(res.data[0]);

        if (res.data.length > 1) {
          setToAnswerList([...res.data.filter((i) => i.color !== "")]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //TODO: Add your state fields here
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);

    if (name !== undefined) {
      if (type === "checkbox") {
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

  const handleEdit = (event, data, id) => {
    event.preventDefault();

    const dt = data.filter((x) => x.id === id);
    setFormData({ ...dt[0] });

    setToUpdate(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (toUpdate === false) {
      handleSubmitJson(event);
    } else {
      let updatedList = answerList.map((item) => {
        if (item.id === formData.id) {
          return { ...item, ...formData };
        }
        return item;
      });

      handleUpdateJson(event, updatedList);

      setToUpdate(false);
    }

    console.log(formData);

    setFormData({ ...resetData });
  };

  const handleSubmitJson = (e) => {
    e.preventDefault();

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(API_URL, postOptions)
      .then((res) => res.json())
      .then((newDuck) => {
        setToAnswerList([...answerList, newDuck]);
      });
  };

  const handleUpdateJson = (e, updatedList) => {
    e.preventDefault();

    const PUT_URL = "http://localhost:3000/ducks/" + formData.id;

    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(PUT_URL, putOptions)
      .then((res) => res.json())
      .then((updated) => {
        console.log(updated);
        setToAnswerList([...updatedList]);
      });
  };

  const handleDeleteJson = (event, data, id) => {
    event.preventDefault();

    const DEL_URL = "http://localhost:3000/ducks/" + id;

    const postOptions = {
      method: "DELETE",
      url: "http://localhost:3000/ducks/" + id,
    };

    let updatedList = answerList.filter((item) => {
      if (item.id !== id) return item;
    });

    fetch(DEL_URL, postOptions)
      .then((res) => res.json())
      .then(() => {
        setToAnswerList([...updatedList]);
      });
  };

  return (
    <main id="formContent" className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answerList}
          handleEdit={handleEdit}
          handleDelete={handleDeleteJson}
        />
      </section>
      <section className="survey__form">
        {Object.keys(formData).length > 0 ? (
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
                      value="color"
                      checked={formData.bestFeature["color"]}
                      onChange={handleInputChange}
                    />
                    Its yellow!
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="bestFeature"
                      type="checkbox"
                      value="squeak"
                      checked={formData.bestFeature["squeak"]}
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
                      value="logo"
                      checked={formData.bestFeature["logo"]}
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
                      value="size"
                      checked={formData.bestFeature["size"]}
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
                      value="color"
                      checked={formData.worstFeature["color"]}
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
                      value="squeak"
                      checked={formData.worstFeature["squeak"]}
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
                      value="logo"
                      checked={formData.worstFeature["logo"]}
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
                      value="size"
                      checked={formData.worstFeature["size"]}
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
        ) : (
          <p></p>
        )}
      </section>
    </main>
  );
}

export default Survey;
