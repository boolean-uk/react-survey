import { useState } from "react";
import AnswerItem from './AnswersItem'

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    color: 0,
    review: '',
    username: '',
    email: '',
    timespent: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    }
  })
  console.log(formData)


  function setColor(e) {
    console.log(e)
    setFormData({
      ...formData,
      color: e.target.defaultValue
    });
  }

  function setTimeSpent(e) {
    const chosenVal = e.target.defaultValue
    const boolVal = e.target.checked

    setFormData({
      ...formData,
      timespent: {
        ...formData.timespent,
        [chosenVal]: boolVal
      }
    })
  }

  function opinionSetter(e) {
    const nameVal = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [nameVal]: value
    })
  }

  function formSubmit(e) {
    e.preventDefault()
    // console.log(e)
    /*
    The code below is the only way i managed to reset the radio buttons to their initial states, any idea how i could do this some other/better way?
    
    */
    e.target[0].checked = false
    e.target[1].checked = false
    e.target[2].checked = false
    e.target[3].checked = false
    setFormData({
      color: 0,
      review: '',
      email: '',
      username: '',
      timespent: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false,
      }
    })

  }



  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

      </section>
      <section className="main__form">
        <form className="form" onSubmit={formSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={setColor}

                />
                <label
                  htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={setColor}


                />
                <label
                  htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={setColor}
                  defaultChecked={false}
                />
                <label
                  htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={setColor}
                  defaultChecked={false}
                />
                <label
                  htmlFor="color-four">4</label>
              </li>
            </ul>




          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}

            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={formData.timespent.swimming}
                    onChange={setTimeSpent}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    checked={formData.timespent.bathing}
                    onChange={setTimeSpent}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={formData.timespent.chatting}
                    onChange={setTimeSpent}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    checked={formData.timespent.noTime}
                    onChange={setTimeSpent}
                  />
                  I don't like to
                  spend time with it
                </label>
              </li>
            </ul>

          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={opinionSetter}
              value={formData.review}
            >
            </textarea>
          </label>



          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={opinionSetter}
            />
          </label>



          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={opinionSetter}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
