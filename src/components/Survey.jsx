import { useState } from "react";
import AnswersList from "./AnswersList";


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswears] = useState([])
  const [userData, setUserData] = useState(
    {
      color: "",
      spendtime:[],
      review: "",
      username: "",
      email: ""
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    //Check if it has an id and update answ with said id 
    if(Object.prototype.hasOwnProperty.call(userData, "id")){
      const updatedAnswers = answers.map((answ) => {
        console.log(answ.id)
        if (answ.id === userData.id) {
          return { ...userData };
        } else {
          return answ;
        }
      });
      console.log(updatedAnswers)
      setAnswears(updatedAnswers);
    }
    //Add new entry with id 
    else{
      console.log(false)
      const id = answers.length + 1;
      setAnswears([{ ...userData, id: id }, ...answers]);
    }
    setUserData({
      color: "",
      spendtime: [],
      review: "",
      username: "",
      email: ""
    });
  }

  
  const handleChange = (event) => {

    const { name, type, value, checked } = event.target;

      if (type === 'checkbox') {
      setUserData((prevFormData) => ({
        ...prevFormData,
        spendtime: checked
      ? [...prevFormData.spendtime, value] 
      : prevFormData.spendtime.filter(item => item !== value),
      }));
      }
      
      else {
        setUserData({ ...userData, [name]: value });
      }
    }
  
  return (
    <main className="survey" >
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} setUserData={setUserData} ></AnswersList>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={userData.color === "1"}/><label
                  htmlFor="color-one"
                  >1 </label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={userData.color === "2"}/><label
                  htmlFor="color-two"
                  >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3"  onChange={handleChange} checked={userData.color === "3"}/><label
                  htmlFor="color-three"
                  >3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={userData.color === "4"}/><label
                  htmlFor="color-four"
                  >4
                </label>
              </li>
            </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input
                    name="spendtime"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={userData.spendtime.includes("swimming")}
                  />Swimming
                  </label>
              </li>
              <li>
                <label
                  ><input 
                   name="spendtime"
                   type="checkbox" 
                   value="bathing"
                   onChange={handleChange}
                   checked={userData.spendtime.includes("bathing")}/>Bathing
                  </label>
              </li>
              <li>
                <label
                  ><input
                    name="spendtime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={userData.spendtime.includes("chatting")}
                  />Chatting
                  </label>
              </li>
              <li>
                <label
                  ><input 
                  name="spendtime" 
                  type="checkbox" 
                  value="noTime" 
                  onChange={handleChange}
                  checked={userData.spendtime.includes("noTime")}
                  />I dont like to
                  spend time with it
                  </label>
              </li>
            </ul>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={userData.review} >
          </textarea>
          </label>
          <label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            onChange={handleChange}
            value={userData.username} 
          /></label>    
          <label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}  
            />
          </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      </section>
    </main>
  );
}

export default Survey;
