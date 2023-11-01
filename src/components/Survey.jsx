import { useState } from "react";

const inputData = {
  color: '',
  spendTime: [],
  review: '',
  username: '',
  email: ''
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(inputData)

  const handleChange = (event) => {
    const {value, type, checked, name} = event.target

    if (type === "checkbox" && checked){  
      setForm({...form},  form[name].push(value))
      console.log(name)
    }else if (type === "checkbox" && checked === false){
      const indexOfName = form[name].indexOf(value)
      form[name].splice(indexOfName, 1)
      setForm({...form})
    }else {
      setForm({...form, [name]: value})
    }

    // const inputVal = event.target.value
    // const inputChecked = event.target.checked

    // if (inputVal === 'color'){
    
    //   setForm({...form, color: inputVal})
    // }
    // if (inputVal === 'spend-time'){
    //   setForm({...form, spendTime: inputVal})
    // }
    console.log(form)
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form)

    // const options = {
    //   method: 'POST',
    //   headers: {'content-type': 'application/json'},
    //   body: JSON.stringify(form)
    // }
    // fetch('http://localhost:5173/', options);

    setForm(inputData)
  }


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>

          {/* --------- first question ----------------- */}

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
              <input id="color-one" type="radio" name="color" value="1" checked={form.color === "1"} onChange={(event) => {handleChange(event)}} />
              <label htmlFor="color-one">1</label>
              </li>

              <li>
              <input id="color-two" type="radio" name="color" value="2" checked={form.color === "2"} onChange={(event) => {handleChange(event)}} />
              <label htmlFor="color-two">2</label>
              </li>

              <li>
              <input id="color-three" type="radio" name="color" value="3" checked={form.color === "3"} onChange={(event) => {handleChange(event)}} />
              <label htmlFor="color-three">3</label>
              </li>

              <li>
              <input id="color-four" type="radio" name="color" value="4" checked={form.color === "4"} onChange={(event) => {handleChange(event)}} />
              <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          {/* ------------- Second question ------------------- */}

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="spendTime" value="swimming"  onChange={(event) => {handleChange(event)}}/>
                  Swimming
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name="spendTime" value="bathing" onChange={(event) => {handleChange(event)}}/>
                  Bathing
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name="spendTime" value="chatting" onChange={(event) => {handleChange(event)}}/>
                  Chatting
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name="spendTime" value="No time" onChange={(event) => {handleChange(event)}}/>
                  I don't have free time
                </label>
              </li>
            </ul>
          </div>

          {/* --------------- third question ------------------- -*/}

          <label>
            What else have you got to say about your rubber duck? 
            <textarea name="review" cols="30" rows="10" onChange={(event) => {handleChange(event)}}></textarea>
          </label>

          <label>
            Put your beautiful name here: 
            <input type="text" name="username" value={form.username} onChange={(event) => {handleChange(event)}}/>
          </label>

          <label>
            Leave us your pretty email please??
            <input type="email" name="email" value={form.email} onChange={(event) => {handleChange(event)}}/>
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
