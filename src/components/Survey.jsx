import { useState, props, useEffect } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState({
    color: 0,
    review: '',
    username: '',
    email: '',
    timeSpent: [],
  });
  const [answerData, setAnswerData] = useState([])
  const [editValue, setEditValue] = useState(-1)

  useEffect(()=> {
    console.log('USEEFFECT', userData.timeSpent)
  }, [userData])


  const handleChange = (event) => {
    const {name, value} = event.target
    // const name = event.target.name;
    // const value = event.target.value;
    // const inputType = event.target.type;
    console.log("*")
    // console.log("formdata before",formData)
    console.log("timespent before",userData.timeSpent)
    if (name === "color") {
      setUserData({ ...userData, color: value});
    }
    if (name === "spend-time") {
      if (userData.timeSpent.includes(value)) {
        setUserData({...userData, timeSpent: userData.timeSpent.filter((checks) => checks !== value)}, console.log("userdata",userData.timeSpent))
      }
      else{
        setUserData({...userData, timeSpent: [...userData.timeSpent, value]})
      }
    }
    if (name === "review") {
      setUserData({ ...userData, review: value});
    }
    if (name === "username") {
      setUserData({ ...userData, username: value});
    }
    if (name === "email") {
      setUserData({ ...userData, email: value});
    }
  }

  const addAnswer = (data) => {
    const updatedAnswers = answerData
    const reset = { 
      color: 0,
      review: '',
      username: '',
      email: '',
      timeSpent: [],
    }

    editValue !== -1 ? updatedAnswers[editValue] = data : updatedAnswers.push(data)
    setAnswerData(updatedAnswers)
    setUserData(reset)
    setEditValue(-1)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    addAnswer(userData); // Call your addAnswer function with the form data
  };


  useEffect(() => {
    if(editValue !== -1){
      setUserData(answerData[editValue])
    }
  }, [editValue, answerData])
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

        <AnswersList answersList = {answerData} setEditValue={setEditValue}/>
      </section>
      <section className="survey__form">

        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
              {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input 
                  onChange={handleChange}
                  id="color-one" 
                  type="radio" 
                  name="color"
                  value="1" 
                  checked={userData.color === "1"} 
                />
                <label htmlFor="color-one">
                    1
                </label>
              </li>
              <li>
                <input 
                  onChange={handleChange}
                  id="color-two" 
                  type="radio" 
                  name="color" 
                  value="2" 
                  checked={userData.color === "2"} 
                />
                <label htmlFor="color-two">
                  2
                </label>
              </li>
              <li>
                <input 
                  onChange={handleChange}
                  id="color-three" 
                  type="radio" 
                  name="color" 
                  value="3" 
                  checked={userData.color === "3"} 
                />
                <label htmlFor="color-three">
                  3
                </label>
              </li>
              <li>
                <input 
                  onChange={handleChange}
                  id="color-four" 
                  type="radio" 
                  name="color" 
                  value="4" 
                  checked={userData.color === "4"} 
                />
                <label htmlFor="color-four">
                  4
                </label>
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
                    onChange={handleChange}
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={userData.timeSpent.includes("swimming")}
                    // onChange={() => console.log("swimming")}
                    />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    onChange={handleChange}
                    type="checkbox" 
                    value="bathing" 
                    checked={userData.timeSpent.includes("bathing")}
                    // onChange={() => console.log("bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={handleChange}
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={userData.timeSpent.includes("chatting")}
                    // onChange={() => console.log("chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                    onChange={handleChange}
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime"
                    checked={userData.timeSpent.includes("noTime")}
                    // onChange={() => console.log("I don't like to spend time with it")}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>

          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
                onChange={handleChange}
                name="review"
                cols="30"
                rows="10"
                placeholder="You can complain here"
                value={userData.review}
            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={userData.username} 
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={userData.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!"/>
        </form>

      </section>
    </main>
  );
}

export default Survey;
