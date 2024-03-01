import { useState } from "react";
import AnswersList from "./AnswersList";

export default function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [userDataArray, setUserDataArray] = useState([]);

  const [userData, setUserData] = useState({
    best: [], // Initialize as an array for checkboxes
    worst: [], // Initialize as an array for checkboxes
    consistency: "", // Initialize as a string for radio buttons
    color: "", // Initialize as a string for radio buttons
    logo: "", // Initialize as a string for radio buttons
    spend: [], // Initialize as an array for checkboxes
    saying: "",
    name: "",
    email: "",
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", { userData });
    setFormSubmitted(true);

    const { name, color, spend, saying } = userData;

    //const userDataSubset = { name, color, spend, saying };

    setUserDataArray((prevDataArray) => [...prevDataArray, userData]);
    setUserData({
      best: [],
      worst: [],
      consistency: "",
      color: "",
      logo: "",
      spend: [],
      saying: "",
      name: "",
      email: "",
    });
  
  };

  

 const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
  
    setUserData((prevData) => {
      if (inputName === "best" || inputName === "worst" || inputName === "spend") {
        // Copy the previous array and add/remove the value based on checkbox state
        const updatedArray = event.target.checked
          ? [...prevData[inputName], inputValue]
          : prevData[inputName].filter((value) => value !== inputValue);
  
        return {
          ...prevData,
          [inputName]: updatedArray,
        };
      }


  
      // For other input types, update the state as usual
      return {
        ...prevData,
        [inputName]: inputValue,
      };
    });
  };

  const handleEdit = (editedData, index) => {
    const updatedArray = [...userDataArray];
    updatedArray[index] = editedData;
    setUserDataArray(updatedArray);
  };

  return (
    <main className="survey">
     <section className={`survey__list ${open ? "open" : ""}`}>
  <h2>Answers list</h2>
  {formSubmitted && <AnswersList userDataArray={userDataArray} onEdit={handleEdit}/>}
</section>
      <section className="survey__form">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about the rubber duck!</h2>
      
      
  <p>What are the best features on the duck?</p>
  <div className="form__group">
  <label>
  <input
    type="checkbox"
    name="best"
    onChange={handleChange}
    value="It's yellow!"
    checked={userData.best.includes("It's yellow!")}
    
  />
  Its Yellow!
</label>

<label>
  <input
    type="checkbox"
    name="best"
    onChange={handleChange}
    value="It squeaks"
    checked={userData.best.includes("It squeaks")}
  />
  It squeaks
</label>

<label>
  <input
    type="checkbox"
    name="best"
    onChange={handleChange}
    value="It has a logo!"
    checked={userData.best.includes("It has a logo!")}
  />
  It has a logo!
</label>

<label>
  <input
    type="checkbox"
    name="best"
    onChange={handleChange}
    value="Its big!"
    checked={userData.best.includes("Its big!")}
  />
  Its big!
</label>
 </div>
<p>What are the worst features on the duck?</p>

<div className="form__group">
  <label>
  <input
    type="checkbox"
    name="worst"
    onChange={handleChange}
    value="Its yellow!"
    checked={userData.worst.includes("Its yellow!")}
    
  />
  Its Yellow!
</label>

<label>
  <input
    type="checkbox"
    name="worst"
    onChange={handleChange}
    value="It squeaks"
    checked={userData.worst.includes("It squeaks")}
  />
  It squeaks
</label>

<label>
  <input
    type="checkbox"
    name="worst"
    onChange={handleChange}
    value="It has a logo!"
    checked={userData.worst.includes("It has a logo!")}
  />
  It has a logo!
</label>

<label>
  <input
    type="checkbox"
    name="worst"
    onChange={handleChange}
    value="Its big!"
    checked={userData.worst.includes("Its big!")}
  />
  Its big!
</label>
</div>

      
    <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    

      <label>
        <input type="radio" name="consistency"
        onChange={handleChange} value="1"
        checked={userData.consistency === "1"} />
       1
      </label>

      <label>
        <input type="radio" name="consistency" value="2"
        onChange={handleChange}
        checked={userData.consistency === "2"} />
        2
      </label>

      <label>
        <input type="radio" name="consistency" value="3" 
        onChange={handleChange}
        checked={userData.consistency === "3"}/>
        3
      </label>

      <label>
        <input type="radio" name="consistency" value="4"
        onChange={handleChange}
        checked={userData.consistency === "4"} />
        4
      </label>
      </div>

   
      <p>How do you rate the rubber duck color? </p>
      <div className="form__group radio">
      <label>
        <input type="radio" name="color"
        onChange={handleChange} value="1"
        checked={userData.color === "1"} />
       1
      </label>

      <label>
        <input type="radio" name="color" value="2"
        onChange={handleChange}
        checked={userData.color === "2"} />
        2
      </label>

      <label>
        <input type="radio" name="color" value="3" 
        onChange={handleChange}
        checked={userData.color === "3"}/>
        3
      </label>

      <label>
        <input type="radio" name="color" value="4"
        onChange={handleChange}
        checked={userData.color === "4"} />
        4
      </label>
    
      </div>
    
      <p>How do you rate the rubber duck logo? </p>
      <div className="form__group radio">
      <label>
        <input type="radio" name="logo"
        onChange={handleChange} value="1"
        checked={userData.logo === "1"} />
       1
      </label>

      <label>
        <input type="radio" name="logo" value="2"
        onChange={handleChange}
        checked={userData.logo === "2"} />
        2
      </label>

      <label>
        <input type="radio" name="logo" value="3" 
        onChange={handleChange}
        checked={userData.logo === "3"}/>
        3
      </label>

      <label>
        <input type="radio" name="logo" value="4"
        onChange={handleChange}
        checked={userData.logo === "4"} />
        4
      </label>
      </div>

    <p>How would you like to spend time with the duck?</p>
    <div className="form__group">
<label>
  <input
    type="checkbox"
    name="spend"
    onChange={handleChange}
    value="Swimming"
    checked={userData.spend.includes("Swimming")}
    
  />
  Swimming
</label>

<label>
  <input
    type="checkbox"
    name="spend"
    onChange={handleChange}
    value="Bathing"
    checked={userData.spend.includes("Bathing")}
  />
  Bathing
</label>

<label>
  <input
    type="checkbox"
    name="spend"
    onChange={handleChange}
    value="Chatting"
    checked={userData.spend.includes("Chatting")}
  />
  Chatting
</label>

<label>
  <input
    type="checkbox"
    name="spend"
    onChange={handleChange}
    value="I dont like to spend time with it"
    checked={userData.spend.includes("I dont like to spend time with it")}
  />
  I dont like to spend time with it
</label>
</div>
<label>
          What else have you got to say about the rubber duck?
          <textarea
            name="saying"
            rows="10"
            placeholder="You can write here"
            onChange={handleChange}
            value={userData.saying}
          ></textarea>
        </label>


    <label>
      Put your name here(if you would like to)
      <input type="text" name="name" 
      onChange={handleChange}
      value={userData.name}/>
    </label>
  

    <label>
      Can we get your email?
      <input type="email" name="email" 
      onChange={handleChange}
      value={userData.email}/>
    </label>

      <input type="submit" value="Submit!" />
    </form>
      
      </section>
    </main>
  );
}