import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

    const [formData, setFormData] = useState({
      color: '',
      consist: '',
      bestfeautures1: '',
      bestfeautures2: '',
      bestfeautures3: '',
      bestfeautures4: '',
      spendtime1: '',
      spendtime2: '',
      spendtime3: '',
      spendtime4: '',
      review: '',
      username: '',
      email: ''
    })

    const handleChange = (event) => {
      const { name, value,type } = event.target

      if (type === "checkbox") {
        setFormData({...formData, [name]: event.target.checked})
      }else {
        setFormData({
          ...formData,
          [name]: value
      })
      }
      
    }

    const [formDataList, setFormDataList] = useState([])

    const handleSubmit = (event) => {
      event.preventDefault()

      setFormDataList([...formDataList, formData])
    
    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList formDataList={formDataList}/>
      </section>

      <section className="main__form">{/* a form should be here */
      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>

        <div className="form__group">
        <h3>What would you say that are the best feautures of your rubber duck?</h3>
        {/* <!-- checkboxes go here --> added */}
          <ul>
            <li>
              <label><input name="bestfeautures1" type="checkbox" value="yellow" checked={formData.bestfeautures1} onChange={handleChange}/>It's yellow!</label>
            </li>
            <li>
              <label><input name="bestfeautures2" type="checkbox" value="squeacks" checked={formData.bestfeautures2} onChange={handleChange}/>It squeacks!</label>
            </li>
            <li>
              <label><input name="bestfeautures3" type="checkbox" value="haslogo" checked={formData.bestfeautures3} onChange={handleChange}/>It has a logo!</label>
            </li>
            <li>
              <label><input name="bestfeautures4" type="checkbox" value="big" checked={formData.bestfeautures4} onChange={handleChange}/>It's big!</label>
            </li>
          </ul>
        </div>


        <div className="form__group radio">
         <h3>How do you rate your rubber duck colour?</h3>
          {/* <!-- Radio inputs go here --> added*/}
          <ul>
            <li>
            <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/><label
                for="color-one">1</label>
            </li>
            <li>
            <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/><label
                for="color-two">2</label>
            </li>
            <li>
            <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/><label
                for="color-three">3</label>
            </li>
            <li>
            <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/><label
                for="color-four">4</label>
            </li>
          </ul>
        </div>

        <div className="form__group radio">
         <h3>How do you rate your rubber duck consisteny?</h3>
          {/* <!-- Radio inputs go here --> added*/}
          <ul>
            <li>
            <input id="consist-one" type="radio" name="consist" value="1" onChange={handleChange}/><label
                for="consist-one">1</label>
            </li>
            <li>
            <input id="consist-two" type="radio" name="consist" value="2" onChange={handleChange}/><label
                for="consist-two">2</label>
            </li>
            <li>
            <input id="consist-three" type="radio" name="consist" value="3" onChange={handleChange}/><label
                for="consist-three">3</label>
            </li>
            <li>
            <input id="consist-four" type="radio" name="consist" value="4" onChange={handleChange}/><label
                for="consist-four">4</label>
            </li>
          </ul>
        </div>

        <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> added */}
          <ul>
            <li>
              <label><input name="spendtime1" type="checkbox" value="swimming" checked={formData.spendtime1} onChange={handleChange}/>Swimming</label>
            </li>
            <li>
              <label><input name="spendtime2" type="checkbox" value="bathing" checked={formData.spendtime2} onChange={handleChange}/>Bathing</label>
            </li>
            <li>
              <label><input name="spendtime3" type="checkbox" value="chatting" checked={formData.spendtime3} onChange={handleChange}/>Chatting</label>
            </li>
            <li>
              <label><input name="spendtime4" type="checkbox" value="noTime" checked={formData.spendtime4} onChange={handleChange}/>I don't like to
              spend time with it</label>
            </li>
          </ul>
        </div>

          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              // value="" 
              onChange={handleChange}/>
          </label>
          <label>Leave us your email pretty please??<input
              type="email"
              name="email"
              // value="" 
              onChange={handleChange}/>
          </label>
        <input className="form__submit" type="submit" value="Submit Survey!"/>
      </form>

    }</section>
    </main>
  );
}

export default Main;
