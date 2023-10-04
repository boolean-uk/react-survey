import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
    color: "",
    consistancy: "",
    logo: "",
    bestfeautures1: "",
    bestfeautures2: "",
    bestfeautures3: "",
    bestfeautures4: "",
    worstfeautures1: "",
    worstfeautures2: "",
    worstfeautures3: "",
    worstfeautures4: "",
    spendtime: "",
    review: "",
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [formDataList, setFormDataList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormDataList([...formDataList, formData]);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="main__form">
        {/* a form should be here */}
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group">
            <h3>
              What would you say that are the best feautures of your rubber
              duck?
            </h3>
            {/* <!-- checkboxes go here --> added */}
            <ul>
              <li>
                <label>
                  <input
                    name="bestfeautures1"
                    type="checkbox"
                    value="yellow"
                    checked={formData.bestfeautures1}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestfeautures2"
                    type="checkbox"
                    value="squeacks"
                    checked={formData.bestfeautures2}
                    onChange={handleChange}
                  />
                  It squeacks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestfeautures3"
                    type="checkbox"
                    value="haslogo"
                    checked={formData.bestfeautures3}
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestfeautures4"
                    type="checkbox"
                    value="big"
                    checked={formData.bestfeautures4}
                    onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>
              What would you say that are the best feautures of your rubber
              duck?
            </h3>

            <ul>
              <li>
                <label>
                  <input
                    name="worstfeautures1"
                    type="checkbox"
                    value="yellow"
                    checked={formData.worstfeautures1}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstfeautures2"
                    type="checkbox"
                    value="squeacks"
                    checked={formData.worstfeautures2}
                    onChange={handleChange}
                  />
                  It squeacks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstfeautures3"
                    type="checkbox"
                    value="haslogo"
                    checked={formData.worstfeautures3}
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstfeautures4"
                    type="checkbox"
                    value="big"
                    checked={formData.worstfeautures4}
                    onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>

          <div class="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>

          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />I
                  don't like to spend time with it
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
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Main;
