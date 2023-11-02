import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">{
      <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
       <label htmlFor="rating">1 <input type="radio"/></label>
       <label htmlFor="rating">2 <input type="radio"/></label>
       <label htmlFor="rating">3 <input type="radio"/></label>
       <label htmlFor="rating">4 <input type="radio"/></label>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
    <label htmlFor="">Swimming<input type="checkbox" name="" id="" /></label>
    <label htmlFor="">Bathing<input type="checkbox" name="" id="" /></label>
    <label htmlFor="">Chatting<input type="checkbox" name="" id="" /></label>
    <label htmlFor="">I dont like to spend time with it<input type="checkbox" name="" id="" /></label>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
        >
      </textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value="" 
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value="" 
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
      
      }</section>
    </main>
  );
}

export default Survey;
