import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rate, setRate] = useState(1);
  const [review, setReview] = useState('')
const [swimming, setSwimming] = useState('false')
const [bathing, setBathing] = useState('false')
const [chatting, setChatting] = useState('false')
const [noTime, SetNoTime] = useState('false')
const [name, setName] = useState('')
const [email, setEmail] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  console.log({rate, swimming, bathing, chatting, noTime, review, name, email})
  setRate('')
  setReview('')
  setSwimming('')
  setChatting('')
  SetNoTime('')
  setBathing('')
  setName('')
  setEmail('')
}

const handleChangeRate = (e) => {
  console.log(e.target.value)
  setRate(e.target.value)
 
}

const handleChangeReview = (e) => {
  console.log(e.target.value)
  setReview(e.target.value)
}

const handleCheckOne = (e) => {
  console.log(e.target.checked)
  setSwimming(e.target.checked)
}
const handleCheckTwo = (e) => {
  console.log(e.target.checked)
  setBathing(e.target.checked)
}
const handleCheckThree = (e) => {
  console.log(e.target.checked)
  setChatting(e.target.checked)
}
const handleCheckFour = (e) => {
  console.log(e.target.checked)
  SetNoTime(e.target.checked)
}

const handleName = (e) => {
console.log(e.target.value);
setName(e.target.value)
}

const handleEmail = (e) => {
  console.log(e.target.value);
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
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value='1' onChange={handleChangeRate} checked = {rate === "1"}/>
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value='2' onChange={handleChangeRate} checked = {rate === "2"} />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value='3' onChange={handleChangeRate} checked = {rate === "3"}/>
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value='4' onChange={handleChangeRate} checked = {rate === "4"}/>
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming"  onChange={handleCheckOne} checked={swimming}/>
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing"  onChange={handleCheckTwo} checked={bathing}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" onChange={handleCheckThree} checked={chatting}/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" onChange={handleCheckFour} checked={noTime}/>
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleChangeReview} value={review}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={name} onChange={handleName} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={email} onChange={handleEmail} />
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

export default Main;
