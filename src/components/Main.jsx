import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [rate, setRate] = useState("");
  const [TimeWithDuck, setTimeWithDuck] = useState("");
  const [text,setText] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({rate,TimeWithDuck,text,name,email});
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };
  const handleTimeWithDuck = (e) => {
    setTimeWithDuck(e.target.value);
  };
  const handleText = (e) =>{
    setText(e.target.value)
    
  }
  const handleName = (e) =>{
    setName(e.target.value)
    
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

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
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleRate}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleRate}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleRate}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleRate}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleTimeWithDuck}
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
                    onChange={handleTimeWithDuck}
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
                    onChange={handleTimeWithDuck}
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
                    onChange={handleTimeWithDuck}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleText}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={name} onChange={handleName}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={email} onChange={handleEmail}/>
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
