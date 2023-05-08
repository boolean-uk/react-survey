import { useState } from 'react'
const initialStateBest = {
  yellow: false,
  squeaks: false,
  logo: false,
  big: false
}
const initialStateWorst = {
  yellow: false,
  squeaks: false,
  logo: false,
  big: false
}
const initialStateTime = {
  swimming: false,
  bathing: false,
  chatting: false,
  none: false
}
function Main() {
  const [open, setOpen] = useState(false) // Ignore this state
  // const [worstFeature, setWorstFeature] = useState()
  // const [bestFeature, setBestFeature] = useState()
  const [consistency, setConsistency] = useState()
  const [colour, setColour] = useState()
  const [logo, setLogo] = useState()
  const [review, setReview] = useState()
  const [name, setName] = useState()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [initialBest, setInitialBest] = useState(initialStateBest)
  const [initialWorst, setInitialWorst] = useState(initialStateWorst)
  const [initialTime, setInitialTime]= useState(initialStateTime)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    console.log({
      initialBest,
      initialWorst,
      consistency,
      initialTime,
      colour,
      logo,
      review,
      name
    })
  }
  function updateCheckboxBest(name) {
    setInitialBest({ ...initialBest, [name]: !initialBest[name] })
    console.log(initialBest)
  }
  function updateCheckboxWorst(name) {
    setInitialWorst({ ...initialWorst, [name]: !initialWorst[name] })
    console.log(initialBest)
  }
  function updateCheckboxTime(name) {
    setInitialTime({ ...initialTime, [name]: !initialTime[name] })
    console.log(initialBest)
  }

  const handleConsistency = (e) => {
    console.log(e.target.value)
    setConsistency(e.target.value)
  }
  const handleColour = (e) => {
    console.log(e.target.value)
    setColour(e.target.value)
  }
  const handleLogo = (e) => {
    console.log(e.target.value)
    setLogo(e.target.value)
  }
  const handleReview = (e) => {
    console.log(e.target.value)
    setReview(e.target.value)
  }
  const handleName = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }
  return (
    <main className="main">
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>{name} Answers list</h2>
        {formSubmitted ? (
          <div>
            <p>
              <em>
                What would you say that are the best features of your rubber
                duck?
              </em>
              <span className="answer__line">{initialBest}</span>
            </p>
            <p>
              <em>
                What would you say that are the worst bits of your rubber duck?{' '}
              </em>
              <span className="answer__line">{initialWorst}</span>
            </p>
            <p>
              <em>How do you rate your rubber duck consistency? </em>
              <span className="answer__line">{consistency}</span>
            </p>
          </div>
        ) : (
          true
        )}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <label>
              <input
                name="yellow"
                type="checkbox"
                value="It's yellow!"
                onChange={() => updateCheckboxBest('yellow')}
                checked={initialBest.yellow}
              />
              It's yellow!
            </label>
            <label>
              <input
                name="squeaks"
                type="checkbox"
                value="It squeaks!"
                onChange={() => updateCheckboxBest('squeaks')}
                checked={initialBest.squeaks}
              />
              It squeaks!
            </label>
            <label>
              <input
                name="logo"
                type="checkbox"
                value="It has a logo!"
                onChange={() => updateCheckboxBest('logo')}
                checked={initialBest.logo}
              />
              It has a logo!
            </label>
            <label>
              <input
                name="big"
                type="checkbox"
                value="Its big!"
                onChange={() => updateCheckboxBest('big')}
                checked={initialBest.big}
              />
              Its big!
            </label>
          </div>
          <div className="form__group">
            <h3>
              What would you say that are the worst bits of your rubber duck?{' '}
            </h3>
            <label>
              <input
                name="yellow"
                type="checkbox"
                value="It's yellow!"
                onChange={() => updateCheckboxWorst('yellow')}
                checked={initialWorst.yellow}
              />
              It's yellow!
            </label>
            <label>
              <input
                name="squeaks"
                type="checkbox"
                value="It squeaks!"
                onChange={() => updateCheckboxWorst('squeaks')}
                checked={initialWorst.squeaks}
              />
              It squeaks!
            </label>
            <label>
              <input
                name="logo"
                type="checkbox"
                value="It has a logo!"
                onChange={() => updateCheckboxWorst('logo')}
                checked={initialWorst.logo}
              />
              It has a logo!
            </label>
            <label>
              <input
                name="big"
                type="checkbox"
                value="Its big!"
                onChange={() => updateCheckboxWorst('big')}
                checked={initialWorst.big}
              />
              Its big!
            </label>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <label>
              <input
                type="radio"
                name="consistency"
                value="1"
                onChange={handleConsistency}
                checked={consistency === '1'}
              />
              1
            </label>

            <label>
              <input
                type="radio"
                name="consistency"
                value="2"
                onChange={handleConsistency}
                checked={consistency === '2'}
              />
              2
            </label>

            <label>
              <input
                type="radio"
                name="consistency"
                value="3"
                onChange={handleConsistency}
                checked={consistency === '3'}
              />
              3
            </label>

            <label>
              <input
                type="radio"
                name="consistency"
                value="4"
                onChange={handleConsistency}
                checked={consistency === '4'}
              />
              4
            </label>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <label>
              <input
                type="radio"
                name="colour"
                value="1"
                onChange={handleColour}
                checked={colour === '1'}
              />
              1
            </label>

            <label>
              <input
                type="radio"
                name="colour"
                value="2"
                onChange={handleColour}
                checked={colour === '2'}
              />
              2
            </label>

            <label>
              <input
                type="radio"
                name="colour"
                value="3"
                onChange={handleColour}
                checked={colour === '3'}
              />
              3
            </label>

            <label>
              <input
                type="radio"
                name="colour"
                value="4"
                onChange={handleColour}
                checked={colour === '4'}
              />
              4
            </label>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <label>
              <input
                type="radio"
                name="logo"
                value="1"
                onChange={handleLogo}
                checked={logo === '1'}
              />
              1
            </label>

            <label>
              <input
                type="radio"
                name="logo"
                value="2"
                onChange={handleLogo}
                checked={logo === '2'}
              />
              2
            </label>

            <label>
              <input
                type="radio"
                name="logo"
                value="3"
                onChange={handleLogo}
                checked={logo === '3'}
              />
              3
            </label>

            <label>
              <input
                type="radio"
                name="logo"
                value="4"
                onChange={handleLogo}
                checked={logo === '4'}
              />
              4
            </label>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck ?</h3>
            <label>
              <input
                name="swimming"
                type="checkbox"
                value="Swimming"
                onChange={() => updateCheckboxTime('swimming')}
                checked={initialTime.swimming}
              />
              Swimming
            </label>
            <label>
              <input
                name="bathing"
                type="checkbox"
                value="Bathing"
                onChange={() => updateCheckboxTime('bathing')}
                checked={initialTime.bathing}
              />
              Bathing
            </label>
            <label>
              <input
                name="chatting"
                type="checkbox"
                value="Chatting"
                onChange={() => updateCheckboxTime('chatting')}
                checked={initialTime.chatting}
              />
              Chatting
            </label>
            <label>
              <input
                name="none"
                type="checkbox"
                value="I don't like to spend time with it"
                onChange={() => updateCheckboxTime('none')}
                checked={initialTime.none}
              />
              I don't like to spend time with it
            </label>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={review}
              onChange={handleReview}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={name}
              onChange={handleName}
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
  )
}

export default Main
