import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const colours = ["Red", "Blue", "Yellow", "Green"];

  const [formData, setFormData] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedTimeSpent = formData.timeSpent;
    if (checked) {
      updatedTimeSpent.push(value);
    } else {
      updatedTimeSpent = updatedTimeSpent.filter((item) => item !== value);
    }
    setFormData({
      ...formData,
      timeSpent: updatedTimeSpent,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      username: "",
      colour: "",
      timeSpent: [],
      review: "",
    });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {AnswersList}
      </section>
      <section className="survey__form">
        <h2>Answer the survey</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="colour">Rubber Duck Colour:</label>
          <select
            id="colour"
            name="colour"
            value={formData.colour}
            onChange={handleInputChange}
          >
            <option value="">Select a colour</option>
            {colours.map((colour) => (
              <option key={colour} value={colour}>
                {colour}
              </option>
            ))}
          </select>
          <div>
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="swimming"
                  name="timeSpent"
                  value="swimming"
                  checked={formData.timeSpent.includes("swimming")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="swimming">Swimming</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="bathing"
                  name="timeSpent"
                  value="bathing"
                  checked={formData.timeSpent.includes("bathing")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="bathing">Bathing</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="chatting"
                  name="timeSpent"
                  value="chatting"
                  checked={formData.timeSpent.includes("chatting")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="chatting">Chatting</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="noTime"
                  name="timeSpent"
                  value="noTime"
                  checked={formData.timeSpent.includes("noTime")}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="noTime">
                  I do not like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            Additional Comments:
            <input
              type="review"
              name="review"
              value={formData.review}
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
