import Checkboxes from "./Checkboxes"
import RadioButtons from "./RadioButtons"

const checkBoxArr = {
  bestFeatures: [
  {
    description: "It's yellow!",
    value: "yellow",
    checked: false
  },
  {
    description: "It squeaks!",
    value: "squeaking",
    checked: false
  },
  {
    description: "It has a logo!",
    value: "logo",
    checked: false
  },
  {
    description: "It's big!",
    value: "size",
    checked: false
  }
],
worstFeatures: [
  {
    description: "It's yellow!",
    value: "yellow",
    checked: false
  },
  {
    description: "It squeaks!",
    value: "squeaking",
    checked: false
  },
  {
    description: "It has a logo!",
    value: "logo",
    checked: false
  },
  {
    description: "It's big!",
    value: "size",
    checked: false
  }
],
timeSpent: [
  {
    description: "Swimming",
    value: "swimming",
    checked: false
  },
  {
    description: "Chatting",
    value: "chatting",
    checked: false
  },
  {
    description: "I don't like to spend time with it",
    value: "noTime",
    checked: false
  }
]
}

export default function SurveyItem ({updateAnswers, answerItem}) {
  const valArr = [
    1, 2, 3, 4
  ]

  const inputHandler = (event) => {
    const key = event.target.name
    const value = event.target.value
    const multipleAnswers = ["bestFeatures", "worstFeatures","timeSpent"]
    
    if (multipleAnswers.includes(key)) {
      // Procedure if it's multiple element answers
      checkBoxArr[key].forEach(element => {
        if (element.value === event.target.value) {
          element.checked = event.target.checked
        }
      })

      const trueAnswers = checkBoxArr[key].filter(element => element.checked)
      const answerStringArr = trueAnswers.map(element => element.description)
      const answerListStr = answerStringArr.join(", ")
      console.log(answerItem, answerListStr, trueAnswers.length)
      updateAnswers({
        ...answerItem,
        [key]: answerListStr
      })
    } else {
      updateAnswers({
        ...answerItem,
        [key]: value
      })
    }
  }

  return (
  <form className="form">
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group">
      <h3>What, would you say, are the best features of your duck?</h3>
      <Checkboxes name={"bestFeatures"} valDescArr={checkBoxArr.bestFeatures} inputHandler={inputHandler}/>
    </div>
    <div className="form__group">
      <h3>What, would you say, are the worst features of your duck?</h3>
      <Checkboxes name={"worstFeatures"} valDescArr={checkBoxArr.worstFeatures} inputHandler={inputHandler}/>
    </div>
    <div className="form__group radio">

      <h3>How do you rate your rubber duck colour?</h3>
      <RadioButtons valArr={valArr} name="colour" inputHandler={inputHandler} />
      
      <h3>How do you rate your duck's consistency?</h3>
      <RadioButtons valArr={valArr} name="consistency" inputHandler={inputHandler} />
      
      <h3>How do you rate your rubber duck's logo?</h3>
      <RadioButtons valArr={valArr} name="logo" inputHandler={inputHandler} />
    
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <Checkboxes name={"timeSpent"} valDescArr={checkBoxArr.timeSpent} inputHandler={inputHandler}/>
    </div>
    <label>
      What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={(event) => inputHandler(event)}
        ></textarea>
    </label>

      <label>Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          onChange={(event) => inputHandler(event)}
        />
      </label>

    <label>
      Leave us your email pretty please??<input
        type="email"
        name="email"
        onChange={(event) => inputHandler(event)}
    /></label
    ><input className="form__submit" type="submit" value="Submit Survey!" />
  </form>
  )
}