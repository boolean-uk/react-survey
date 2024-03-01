import { useState } from "react";
import AnswersList from "./AnswersList";
import BestFeatures from "./FormQuestions/BestFeatures";
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
  bestFeatures: {
    yellow: false,
    squeaks: false,
    logo: false,
    big: false
  },
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [userData, setUserData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editData) {
      const updatedData = submittedData.map(data => {
        if (data.username === editData.username) {
          return userData;
        }
        return data;
      });

      setSubmittedData(updatedData);
      setEditData(null);
    } else {
      setSubmittedData([ ...submittedData, userData ]);
      fetch("http://localhost:3000/answers", {
        method: "POST",
        body: JSON.stringify(userData),
      });
    }

    console.log(userData)
    setUserData(initialFormData);
  };

  const handleEdit = (data) => {
    setUserData(data);
    setEditData(data);
  }

  // FIX THIS, IT DOES NOT DELETE FROM SERVER YET.
  const handleDelete = (data) => {
    fetch(`http://localhost:3000/answers/${data.username}`, {
    method: "DELETE",
    });
    console.log("Attempted to delete")
    setSubmittedData(submittedData.filter((answer) => {
      answer.username !== data.username
    }));
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (name !== undefined) {
      if (type === "checkbox") {
        if (name.startsWith("spend-time")) {
          setUserData({ ...userData, spendTime: { ...userData.spendTime, [value]: checked }});
        } else if (name.startsWith("bestFeatures")) {
          setUserData({ ...userData, bestFeatures: { ...userData.bestFeatures, [value]: checked }});
        }
      } else {
        setUserData({ ...userData, [name]: value });
      }
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* EXTENSION 1 */}
        <AnswersList submittedData={submittedData} handleEdit={handleEdit} handleDelete={handleDelete}/>
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
          <BestFeatures handleChange={handleChange} userData={userData}/>

          {/*<!-- Text inputs go here -->*/}
          <Review handleChange={handleChange} userData={userData}/>
          <Username handleChange={handleChange} userData={userData}/>
          <Email handleChange={handleChange} userData={userData}/>
          
          <input className="form__submit" type="submit" value={editData ? "Save Edited Answer!" : "Submit Survey!"} />
        </form>
      </section>
    </main>
  );
}

export default Survey;
