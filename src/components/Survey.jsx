import { useState } from "react";
import AnswersList from "./AnswersList";

/*We are defining an initial state for the form. This object, initialFormState, holds the initial values for each field of the form.*/
const initialFormState = {
  bestFeatures: {
    yellow: false,
    squeaks: false,
    logo: false,
    big: false
  },
  worstBits: {
    yellow: false,
    squeaks: false,
    logo: false,
    big: false
  },
  colour: "",
  spend_time: [],
  review: "",
  email: "",
  username: "",
  timeSpent: ""
}; 

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialFormState);
  const [formList, setFormList] = useState([]);

  // handleChange function to update form state based on input changes
  const handleChange = (event) => {
    event.preventDefault();
   const { name, value, type, checked } = event.target;

    // Update the form state based on the type of input
    if (type === "checkbox") {
      if (name === "bestFeatures" || name === "worstBits") {
        // For checkboxes in bestFeatures and worstBits
        setForm((prev) => ({
          ...prev,
          [name]: { ...prev[name], [value]: checked }
        }));

      } else if (name === "spend-time") {
        // For checkboxes in spend-time
        if (value === "noTime") {
          setForm((prev) => ({
            ...prev,
            spend_time: checked ? [] : ["swimming", "bathing", "chatting"]
          }));
        } else {
          setForm((prev) => ({
            ...prev,
            spend_time: checked
              ? [...prev.spend_time, value] // Add the activity to the array
              : prev.spend_time.filter((activity) => activity !== value) // Remove the activity from the array
          }));
        }
      } else {
        // For other checkboxes
        setForm((prev) => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      // For other input types
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }
    console.log(form)

    /*
    if (type === "checkbox" && name === "bestFeatures"){
      setForm((prev) => ({...prev, [name]: {...prev.bestFeatures, [value]:!prev.bestFeatures[value]}}))
    }
    
    else if (type === "checkbox" && name === "worstBits"){
      setForm((prev) => ({...prev, [name]: {...prev.worstBits, [value]:!prev.worstBits[value]}}))
    }
    setForm((prev) => ({...prev, [name]: value}))
    */


    /*
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? 
        checked ? [...prevForm[name], value] : prevForm[name].filter(item => item !== value) : 
        value
    }));
    */
  };

  // handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the current form data to the form list
    setFormList([...formList, form]);
    // Reset the form to initial state
    setForm(initialFormState);
  };

  console.log(formList)
  {/*
  // Function to handle consistency rating change
const handleConsistencyChange = (event) => {
  const value = event.target.value;
  setForm(prevForm => ({
    ...prevForm,
    consistency: value
  }));
};

// Function to handle color rating change
const handleColorChange = (event) => {
  const value = event.target.value;
  setForm(prevForm => ({
    ...prevForm,
    color: value
  }));
};

// Function to handle logo rating change
const handleLogoRatingChange = (event) => {
  const value = event.target.value;
  setForm(prevForm => ({
    ...prevForm,
    logoRating: value
  }));
};
*/}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
       
      </section>
      <section className="survey__form">{/* a form should be here */}
      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form-group">
      <h3>What would you say that are the best features of your rubber duck?</h3>
        <label htmlFor="yellow">It's yellow!</label>
        <input type="checkbox" id="yellow" name="bestFeatures" value="yellow" onChange={handleChange} checked={form.bestFeatures.yellow} />

        <label htmlFor="squeaks">It squeaks!</label>
        <input type="checkbox" id="squeaks" name="bestFeatures" value="squeaks" onChange={handleChange} checked={form.bestFeatures.squeaks} />

        <label htmlFor="logo">It has a logo!</label>
        <input type="checkbox" id="logo" name="bestFeatures" value="logo" onChange={handleChange} checked={form.bestFeatures.logo} />

        <label htmlFor="big">It's big!</label>
         <input type="checkbox" id="big" name="bestFeatures" value="big" onChange={handleChange} checked={form.bestFeatures.big} />
      </div>

      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
          <label htmlFor="yellowWorst">It's yellow!</label>
          <input type="checkbox" id="yellowWorst" name="worstBits" value="yellow" onChange={handleChange} checked={form.worstBits.yellow} />

          <label htmlFor="squeaksWorst">It squeaks!</label>
          <input type="checkbox" id="squeaksWorst" name="worstBits" value="squeaks" onChange={handleChange} checked={form.worstBits.squeaks} />

          <label htmlFor="logoWorst">It has a logo!</label>
          <input type="checkbox" id="logoWorst" name="worstBits" value="logo" onChange={handleChange} checked={form.worstBits.logo} />

          <label htmlFor="bigWorst">It's big!</label>
          <input type="checkbox" id="bigWorst" name="worstBits" value="big" onChange={handleChange} checked={form.worstBits.big} />
      </div>

      

      <div className="form_group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <input type="radio" id="1" name="colour" value="1" onChange={handleChange} checked={form.colour === "1"} />
        <label htmlFor="1">1</label>

        <input type="radio" id="2" name="colour" value="2" onChange={handleChange} checked={form.colour === "2"} />
        <label htmlFor="2">2</label>

        <input type="radio" id="3" name="colour" value="3" onChange={handleChange} checked={form.colour === "3"} />
        <label htmlFor="3">3</label>

        <input type="radio" id="4" name="colour" value="4" onChange={handleChange} checked={form.colour === "4"} />
        <label htmlFor="4">4</label>
      </div>
    

      <div className="form_group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <label htmlFor="swimming">Swimming</label>
        <input type="checkbox" id="swimming" name="spend-time" value="swimming" onChange={handleChange} checked={form.spend_time.includes("swimming")} />

        <label htmlFor="bathing">Bathing</label>
        <input type="checkbox" id="bathing" name="spend-time" value="bathing" onChange={handleChange} checked={form.spend_time.includes("bathing")} />

        <label htmlFor="chatting">Chatting</label>
        <input type="checkbox" id="chatting" name="spend-time" value="chatting" onChange={handleChange} checked={form.spend_time.includes("chatting")} />

        <label htmlFor="noTime">I don't like to spend time with it</label>
        <input type="checkbox" id="noTime" name="spend-time" value="noTime" onChange={handleChange} checked={form.spend_time.includes("noTime")} />
      </div>

      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" value={form.review} onChange={handleChange}></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={form.username} onChange={handleChange} />
      </label>

      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Survey;
