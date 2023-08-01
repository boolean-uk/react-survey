import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? (checked ? [...formData[name], value] : formData[name].filter(item => item !== value)) : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    // form to its original state
    setFormData({
      color: "",
      spendTime: [],
      review: "",
      username: "",
      email: "",
    });
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={formData.color === "1"}
                  onChange={handleInputChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formData.color === "2"}
                  onChange={handleInputChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formData.color === "3"}
                  onChange={handleInputChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formData.color === "4"}
                  onChange={handleInputChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <input
                  name="spendTime"
                  type="checkbox"
                  value="swimming"
                  checked={formData.spendTime.includes("swimming")}
                  onChange={handleInputChange}
                />
                Swimming
              </li>
              <li>
                <input
                  name="spendTime"
                  type="checkbox"
                  value="bathing"
                  checked={formData.spendTime.includes("bathing")}
                  onChange={handleInputChange}
                />
                Bathing
              </li>
              <li>
                <input
                  name="spendTime"
                  type="checkbox"
                  value="chatting"
                  checked={formData.spendTime.includes("chatting")}
                  onChange={handleInputChange}
                />
                Chatting
              </li>
              <li>
                <input
                  name="spendTime"
                  type="checkbox"
                  value="noTime"
                  checked={formData.spendTime.includes("noTime")}
                  onChange={handleInputChange}
                />
                I don't like to spend time with it
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
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
