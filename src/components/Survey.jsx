import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState({
    colour: "",
    time: "",
    else: "",
    name: "",
    email: ""
  });

  console.log("answers", { answers });

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;

    console.log({ inputName, inputValue, inputType });

    if (inputName === "colour") {
      setAnswers({ ...answers, colour: inputValue });
    }
    if (inputName === "time") {
      setAnswers({ ...answers, time: inputValue });
    }
    if (inputName === "else") {
      setAnswers({ ...answers, else: inputValue });
    }
    if (inputName === "name") {
      setAnswers({ ...answers, name: inputValue });
    }
    if (inputName === "email") {
      setAnswers({ ...answers, email: inputValue });
    }
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/answers", {
      method: "POST",
      body: JSON.stringify(answers),
    });
    console.log("Form submitted:", { answers });
    
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form" onSubmit={handleSubmit}>
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="colour" value="1" onChange={handleChange} checked={answers.colour===1}/><label
                  htmlFor="color-one"
                  >1</label
                >
              </li>
              <li>
                <input id="color-two" type="radio" name="colour" value="2" onChange={handleChange} checked={answers.colour===2}/><label
                  htmlFor="color-two"
                  >2</label
                >
              </li>
              <li>
                <input id="color-three" type="radio" name="colour" value="3" onChange={handleChange} checked={answers.colour===3}/><label
                  htmlFor="color-three"
                  >3</label
                >
              </li>
              <li>
                <input id="color-four" type="radio" name="colour" value="4" onChange={handleChange} checked={answers.colour===4}/><label
                  htmlFor="color-four"
                  >4</label
                >
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input
                    name="time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange} 
                    checked={answers.time==="swimming"}
                  />Swimming</label
                >
              </li>
              <li>
                <label
                  ><input name="time" type="checkbox" value="bathing" />Bathing</label
                >
              </li>
              <li>
                <label
                  ><input
                    name="time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange} 
                    checked={answers.time==="chatting"}
                  />Chatting</label
                >
              </li>
              <li>
                <label
                  ><input name="time" type="checkbox" value="noTime" onChange={handleChange} checked={answers.time==="no-time"}/>I don`t like to
                  spend time with it</label
                >
              </li>
            </ul>
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="else"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={answers.else}
            ></textarea></label
          ><label
            >Put your name here (if you feel like it):<input
              type="text"
              name="name"
              onChange={handleChange}
              value={answers.name}/></label
          ><label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              onChange={handleChange}
              value={answers.email}/></label
          ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;