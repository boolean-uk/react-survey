import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import { controllerGet, controllerPost, controllerUpdate } from "../Controller/apiController.js";

const INITIAL_FORM_DATA = {
  color: "",
  spendtime: "",
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); 
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });
  const [submittedForms, setSubmittedForms] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);

  useEffect(() => {
    controllerGet().then((response) => {
      console.log(response);
      setSubmittedForms(prevState => {
        return response.map(item => ({
          id: `${item.id}`,
          color: item.color,
          email: item.email,
          username: item.username,
          review: item.review,
          spendtime: item.spendtime
        }));
      });
    });
  }, []);
  

  const submit = (e) => {
    e.preventDefault();
    if (
      formData.color === "" ||
      formData.email === "" ||
      formData.username === "" ||
      formData.review === "" ||
      formData.spendtime.length === 0
    ) {
      return;
    }

    if (isEditing) {
      const submittedFormsPayload = {
        id: `${editingId}`,
        color: formData.color,
        email: formData.email,
        username: formData.username,
        review: formData.review,
        spendtime: formData.spendtime,
      };
      const updatingSubmittedForms = [...submittedForms];
      const index = updatingSubmittedForms.findIndex(
        (obj) => obj.id === editingId
      );
      updatingSubmittedForms[index] = submittedFormsPayload;
      setSubmittedForms(updatingSubmittedForms);
      setFormData({ ...INITIAL_FORM_DATA });
      setIsEditing(false);
      controllerUpdate(submittedFormsPayload)
      return;
    }

    const submittedFormsPayload = {
      id: `${submittedForms.length + 1}`,
      color: formData.color,
      email: formData.email,
      username: formData.username,
      review: formData.review,
      spendtime: formData.spendtime,
    };

    setSubmittedForms([...submittedForms, submittedFormsPayload]);
    setFormData({ ...INITIAL_FORM_DATA });
    controllerPost(submittedFormsPayload)
  };

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);
    if (name !== undefined) {
      if (type === "checkbox") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: checked
            ? [...prevFormData[name], value]
            : prevFormData[name].filter((item) => item !== value),
        }));
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const editAnswer = (data, id) => {
    console.log();
    setIsEditing(true);
    setEditingId(id);
    setFormData(data);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedForms} setFormData={editAnswer} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={(e) => submit(e)}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  onChange={handleInputChange}
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={formData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  onChange={handleInputChange}
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  onChange={handleInputChange}
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  onChange={handleInputChange}
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formData.color === "4"}
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
                    onChange={handleInputChange}
                    name="spendtime"
                    type="checkbox"
                    value="swimming"
                    checked={formData.spendtime.includes("swimming")}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={handleInputChange}
                    name="spendtime"
                    type="checkbox"
                    value="bathing"
                    checked={formData.spendtime.includes("bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={handleInputChange}
                    name="spendtime"
                    type="checkbox"
                    value="chatting"
                    checked={formData.spendtime.includes("chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={handleInputChange}
                    name="spendtime"
                    type="checkbox"
                    value="noTime"
                    checked={formData.spendtime.includes("noTime")}
                  />
                  I don&apos;t like to spend time with it
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
              onChange={handleInputChange}
              value={formData.review}
            />
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
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
