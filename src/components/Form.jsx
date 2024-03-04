import PropTypes from 'prop-types'

function Form ( {form, handleInput, submitForm} ) {
    return (
        <form className="form" onSubmit={submitForm}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          {
            //JSON.stringify(form)
          }
          <div className="form__group radio" required>
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" checked={form.color === "1"} onChange={() => handleInput(event, "color")} />
                <label
                  htmlFor="color-one">
                    1
                </label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" checked={form.color === "2"} onChange={() => handleInput(event, "color")}/>
                <label htmlFor="color-two">
                    2
                </label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" checked={form.color === "3"} onChange={() => handleInput(event, "color")}/>
                <label htmlFor="color-three">
                    3
                </label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" checked={form.color === "4"} onChange={() => handleInput(event, "color")}/>
                <label htmlFor="color-four">
                  4
                </label>
              </li>
            </ul>


          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
          
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time" type="checkbox" value="swimming" checked={form.spendTime.includes("swimming")} onChange={() => handleInput(event, "spendTime")} />
                    Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" checked={form.spendTime.includes("bathing")} onChange={() => handleInput(event, "spendTime")}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" checked={form.spendTime.includes("chatting")} onChange={() => handleInput(event, "spendTime")}/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" checked={form.spendTime.includes("noTime")} onChange={() => handleInput(event, "spendTime")}/>
                  I don't like to spend time with it
                </label>
              </li>
            </ul>

          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" placeholder="Your response here" value={form.review} required onChange={() => handleInput(event, "review")}>
            </textarea>
          </label >

          <label >Put your name here (if you feel like it):
            <input type="text" name="username" placeholder="Your username" value={form.username}  onChange={() => handleInput(event, "username")} />
            </label>
              <label>Leave us your email pretty please?
                <input type="email" name="email" placeholder="Your email"  value={form.email} required onChange={() => handleInput(event, "email")}/>
              </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}

Form.propTypes = {
    form: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired, 
    submitForm: PropTypes.func.isRequired
}

export default Form