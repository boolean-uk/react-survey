export default function Form({
    form,
    setForm,
    answersList,
    setAnswersList,
    INITIAL_STATE,
  }) {
    function handleChange(event) {
      const { name, value, type, checked } = event.target;
      if (type === "checkbox" && checked) {
        form[name].push(value);
        setForm({ ...form });
      } else if (type === "checkbox" && checked === false) {
        const index = form[name].indexOf(value);
        form[name].splice(index, 1);
        setForm({ ...form });
      } else {
        setForm({ ...form, [name]: value });
      }
    }
  
    function submitForm(event) {
      event.preventDefault();
      setForm({...INITIAL_STATE, timeSpent: []});
      setAnswersList([...answersList, form]);
    }
  
    return (
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={form.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={form.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={form.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={form.color === "4"}
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
                    onChange={(event) => handleChange(event)}
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={form.timeSpent.includes("swimming")}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={form.timeSpent.includes("bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="timeSpent"
                    type="checkbox"
                    value="chatting"
                    checked={form.timeSpent.includes("chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={form.timeSpent.includes("noTime")}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={(event) => handleChange(event)}
              name="review"
              cols="30"
              rows="10"
              value={form.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="username"
              value={form.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={(event) => handleChange(event)}
              type="email"
              name="email"
              value={form.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    );
  }