import { useState, useEffect } from "react";
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

      /* const updatedAnswers = answers.map((answ) => {
        console.log(answ.id)
        if (answ.id === userData.id) {
          return { ...userData };
        } else {
          return answ;
        }
      });
      console.log(updatedAnswers)
      setAnswears(updatedAnswers);
    } */

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      fetch(
        "http://localhost:3000/answers/" + userData.id,
        requestOptions
      )
        .then((response) => response.json())
        .then(() => {
          fetchSurveyResponses();
        });
    }
    //Add new entry with id 
    else{
   /*    console.log(false)
      const id = answers.length + 1;
      setAnswears([{ ...userData, id: id }, ...answers]); */
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:3000/answers", fetchOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok, status: ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .then(() => {
          fetchSurveyResponses();
        });
    }
      
    setUserData({
      color: "",
      spendtime: [],
      review: "",
      username: "",
      email: ""
    });
  }

 /*  const handleDelete = (answer) => {
    fetch("http://localhost:3000/answers/" + answer.id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .then(() => {
        fetchSurveyResponses();
      });
  }
  */
  
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

    useEffect(() => {
      fetchSurveyResponses();
    }, []);
  
    const fetchSurveyResponses = () => {
      fetch("http://localhost:3000/answers")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Network response was not ok, status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setAnswears(data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };
  
  return (
    <main className="survey" >
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} setUserData={setUserData} /* handleDelete={handleDelete} */ ></AnswersList>
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
