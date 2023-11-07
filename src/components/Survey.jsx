import { useState } from "react";

const INITIAL_STATE = {
  rubberDuck: '',
  spendTime: '',
  aboutDuck: '',
  name: '',
  email: ''

}


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE)

  const submitForm =(event) =>{
    event.preventDefault()

    setForm(INITIAL_STATE)
  }

  // common event listener callback function
  const changeHandle =(event)=>{
    const {name, value, checked, type} = event.target
    if(type === 'checkbox'){
      setForm({...form, [name] : value})
    }else{
      setForm({...form , [name] : value})
    }
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

      </section>
      <section className="survey__form">
        <form class="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*  <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input id="color-one" type="radio" name="rubberDuck" value="1"  checked={form.rubberDuck === '1'}  onChange={(event)=>changeHandle(event)}/><label
                  for="color-one"
                >1</label
                >
              </li>
              <li>
                <input id="color-two" type="radio" name="rubberDuck" value="2"  checked={form.rubberDuck === '2'}   onChange={(event)=>changeHandle(event)} /><label
                  for="color-two"
                >2</label
                >
              </li>
              <li>
                <input id="color-three" type="radio" name="rubberDuck" value="3"  checked={form.rubberDuck === '3'}   onChange={(event)=>{changeHandle(event)}}  /><label
                  for="color-three"
                >3</label
                >
              </li>
              <li>
                <input id="color-four" type="radio" name="rubberDuck" value="4"  checked={form.rubberDuck === '4'}  onChange={(event)=>changeHandle(event)} /><label
                  for="color-four"
                >4</label
                >
              </li>
            </ul>

          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/*   <!-- checkboxes go here --> */}
            <ul>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={form.spendTime === 'swimming'}
                    onChange={(event) => changeHandle(event)}
                  />Swimming</label
                >
              </li>
              <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing"  checked={form.spendTime === 'bathing'}  onChange={(event) => changeHandle(event)} />Bathing</label
                >
              </li>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={form.chatting === 'chatting'}
                    onChange={(event) => changeHandle(event)}
                  />Chatting</label
                >
              </li>
              <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime"  checked={form.spendTime === 'noTime'}  onChange={(event) => changeHandle(event)}/>I don't like to
                  spend time with it</label
                >
              </li>
            </ul>
          </div>
          <label
          >What else have you got to say about your rubber duck?<textarea
            //name="review"
            cols="30"
            rows="10"
            name ="aboutDuck"
            value='These rubber duckS are of quality!'
            onChange={(event)=>changeHandle(event)}
          ></textarea></label
          ><label
          >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value="name" 
              onChange={(event) => changeHandle(event)}/></label
          ><label
          >Leave us your email pretty please??<input
              type="email"
              name="email"
              value="Faiza@gmail.com" 
             onChange={(event)=>changeHandle(event)}/></label
          ><input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
