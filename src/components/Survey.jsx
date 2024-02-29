import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [timeSpent, setTimeSpent] = useState([])
  const [colour, setColour] = useState(1)
  const [bestFeatures, setBestFeatures] = useState([]);
  const [worstBits, setWorstBits] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [review, setReview] = useState('');
  const [answersList, setAnswersList] = useState([])

  const submittedForm = {
    username : username,
    colour : colour,
    timeSpent : timeSpent,
    review : review,
    bestFeatures : bestFeatures,
    worstBits : worstBits,
  }
 
  const handleChange2 = (event) => {
    const { name, value, type, checked } = event.target;
   setTimeSpent(prev => {
    if(checked){
      console.log([...prev, value])
      return [...prev, value];
    } else {
      console.log(prev.filter(item => item !== value))
      return prev.filter(item => item !== value)
    }
   })
  }

  //Bestfeatures
  const handleChange3 = (event) => {
    const {name, value, type, checked} = event.target;
    setBestFeatures(prev =>{
      if(checked){
        console.log([...prev, value])
        return [...prev, value];
      }else{
        console.log(prev.filter(item => item !== value))
        return prev.filter(item => item !== value)
      }
    })    
  }

  //WorstBits
  const handleChange4 = (event) => {
    const {name, value, type, checked} = event.target;
    setWorstBits(prev =>{
      if(checked){
        console.log([...prev, value])
        return [...prev, value];
      }else{
        console.log(prev.filter(item => item !== value))
        return prev.filter(item => item !== value)
      }
    })    
  }

  //colorchange - radiobutton
  const handleColorChange = (event) => {
    const value = parseInt(event.target.value); // Parse the value as an integer
    setColour(value); // Set the state with the selected value
    console.log(value);
  };

  // Separate change handlers for email, username, and review
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };
  
  
  // handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the current form data to the Answerlist
    console.log(submittedForm)
    setAnswersList([
      ...answersList, submittedForm
    ])
    setEmail('');
    setUsername('');
    setColour(1);
    setBestFeatures([]);
    setWorstBits([]);
    setReview('')
    setTimeSpent([])
  };
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
         <AnswersList answersList={answersList} />
       
      </section>
      <section className="survey__form">{/* a form should be here */}
      {/* Form starts here */}
      <form onSubmit={handleSubmit} className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form-group">
      <h3>What would you say that are the best features of your rubber duck?</h3>
        <label htmlFor="yellow">It's yellow!</label>
        <input type="checkbox" id="yellow" name="bestFeatures" value="yellow" onChange={handleChange3} checked={bestFeatures.includes("yellow")} />

        <label htmlFor="squeaks">It squeaks!</label>
        <input type="checkbox" id="squeaks" name="bestFeatures" value="squeaks" onChange={handleChange3} checked={bestFeatures.includes("squeaks")} />

        <label htmlFor="logo">It has a logo!</label>
        <input type="checkbox" id="logo" name="bestFeatures" value="logo" onChange={handleChange3} checked={bestFeatures.includes("logo")} />

        <label htmlFor="big">It's big!</label>
         <input type="checkbox" id="big" name="bestFeatures" value="big" onChange={handleChange3} checked={bestFeatures.includes("big")} />
      </div>

      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
          <label htmlFor="yellowWorst">It's yellow!</label>
          <input type="checkbox" id="yellowWorst" name="worstBits" value="yellow" onChange={handleChange4} checked={worstBits.includes("yellow")}/>

          <label htmlFor="squeaksWorst">It squeaks!</label>
          <input type="checkbox" id="squeaksWorst" name="worstBits" value="squeaks" onChange={handleChange4} checked={worstBits.includes("squeaks")} />

          <label htmlFor="logoWorst">It has a logo!</label>
          <input type="checkbox" id="logoWorst" name="worstBits" value="logo" onChange={handleChange4} checked={worstBits.includes("logo")} />

          <label htmlFor="bigWorst">It's big!</label>
          <input type="checkbox" id="bigWorst" name="worstBits" value="big" onChange={handleChange4} checked={worstBits.includes("big")} />
      </div>

      

      <div className="form_group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <input type="radio" id="1" name="colour" value="1" onChange={handleColorChange} checked={colour === 1} />
        <label htmlFor="1">1</label>

        <input type="radio" id="2" name="colour" value="2" onChange={handleColorChange} checked={colour === 2} />
        <label htmlFor="2">2</label>

        <input type="radio" id="3" name="colour" value="3" onChange={handleColorChange} checked={colour === 3} />
        <label htmlFor="3">3</label>

        <input type="radio" id="4" name="colour" value="4" onChange={handleColorChange} checked={colour === 4} />
        <label htmlFor="4">4</label>
      </div>
    
      <div className="form_group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <label htmlFor="swimming">Swimming</label>
        <input type="checkbox" id="swimming" name="spend-time" value="swimming" onChange={handleChange2} checked={timeSpent.includes("swimming")} />

        <label htmlFor="bathing">Bathing</label>
        <input type="checkbox" id="bathing" name="spend-time" value="bathing" onChange={handleChange2} checked={timeSpent.includes("bathing")} />

        <label htmlFor="chatting">Chatting</label>
        <input type="checkbox" id="chatting" name="spend-time" value="chatting" onChange={handleChange2} checked={timeSpent.includes("chatting")} />

        <label htmlFor="noTime">I don't like to spend time with it</label>
        <input type="checkbox" id="noTime" name="spend-time" value="noTime" onChange={handleChange2} checked={timeSpent.includes("noTime")} />
      </div>

      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" value={review} onChange={handleReviewChange}></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Survey;
