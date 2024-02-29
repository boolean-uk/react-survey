import { useState } from "react";
import Color from "./FormQuestions/Color";
import Consistency from "./FormQuestions/Consistency";
import Email from "./FormQuestions/Email";
import Logo from "./FormQuestions/Logo";
import Review from "./FormQuestions/Review";
import SpendTime from "./FormQuestions/SpendTime";
import Username from "./FormQuestions/Username";

const initialFormData = {
  color: "",
  consistency: "",
  logo: "",
  spendTime: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  },
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [userData, setUserData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/answers", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    console.log(userData)
    setUserData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (name !== undefined) {
      if (type === "checkbox") {
        setUserData({ ...userData, spendTime: { ...userData.spendTime, [value]: checked }
        });
      } else {
        setUserData({ ...userData, [name]: value });
      }
    }
  };
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        ANSWERS HERE
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          {/*<!-- Radio inputs go here -->*/}
          <Color handleChange={handleChange} userData={userData}/>
          <Consistency handleChange={handleChange} userData={userData}/>
          <Logo handleChange={handleChange} userData={userData}/>

          {/*<!-- Checkboxes go here -->*/}
          <SpendTime handleChange={handleChange} userData={userData}/>

          {/*<!-- Text inputs go here -->*/}
          <Review handleChange={handleChange} userData={userData}/>
          <Username handleChange={handleChange} userData={userData}/>
          <Email handleChange={handleChange} userData={userData}/>
          
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
