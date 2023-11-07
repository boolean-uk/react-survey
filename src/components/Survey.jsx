import { useState } from "react";
import AnswersItem from "./AnswersItem";

const initialFormState = {
  color: "", // radio has to be empty string
  checkBoxSpendTime: {
    swimming: false, // checkbox has to be boolean
    bathing: false,
    chatting: false,
    noTime: false,
  },
  review: "",
  username: "",
  email: "",
};
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormState({
        ...formState,
        checkBoxSpendTime: { ...formState.checkBoxSpendTime, [value]: checked },
      });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState(initialFormState);
  };

  return (
    <main className='survey'>
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {/* <AnswersItem /> */}
      </section>

      <section className='survey__form'>
        {/* a form should be here */}
        <form className='form' onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className='form__group radio'>
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            {/* <!-- This is a radio buttons group --> */}
            <ul>
              <li>
                <input
                  id='color-one'
                  type='radio'
                  name='color'
                  value='1'
                  checked={formState.color === "1"}
                  onChange={(event) => handleChange(event)}
                />

                <label htmlFor='color-one'>1</label>
              </li>
              <li>
                <input
                  id='color-two'
                  type='radio'
                  name='color'
                  value='2'
                  checked={formState.color === "2"}
                  onChange={(event) => handleChange(event)}
                />
                <label htmlFor='color-two'>2</label>
              </li>
              <li>
                <input
                  id='color-three'
                  type='radio'
                  name='color'
                  value='3'
                  checked={formState.color === "3"}
                  onChange={(event) => handleChange(event)}
                />
                <label htmlFor='color-three'>3</label>
              </li>
              <li>
                <input
                  id='color-four'
                  type='radio'
                  name='color'
                  value='4'
                  checked={formState.color === "4"}
                  onChange={(event) => handleChange(event)}
                />
                <label htmlFor='color-four'>4</label>
              </li>
            </ul>
          </div>
          <div className='form__group'>
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            {/* <!-- This is a checkboxes group --> */}
            <ul>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name='spend-time'
                    type='checkbox'
                    checked={formState.checkBoxSpendTime.swimming}
                    value='swimming'
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name='spend-time'
                    type='checkbox'
                    checked={formState.checkBoxSpendTime.bathing}
                    value='bathing'
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name='spend-time'
                    type='checkbox'
                    checked={formState.checkBoxSpendTime.chatting}
                    value='chatting'
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name='spend-time'
                    type='checkbox'
                    checked={formState.checkBoxSpendTime.noTime}
                    value='noTime'
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={(event) => handleChange(event)}
              value={formState.review}
              name='review'
              cols='30'
              rows='10'></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={(event) => handleChange(event)}
              value={formState.username}
              type='text'
              name='username'
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={(event) => handleChange(event)}
              value={formState.email}
              type='email'
              name='email'
            />
          </label>
          <input
            className='form__submit'
            type='submit'
            value='Submit Survey!'
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;

// const INITIAL_STATE = {
//   firstName: '',
//   lastName: '',
//   age: 0,
//   complaint: '',
//   contact: '',
//   consent: false,
//   subscription: false,
// }

// function App() {
//   const [form, setForm] = useState(INITIAL_STATE)

//   const submitForm = (event) => {
//     event.preventDefault();
//     console.log(form)

//     const options = {
//       method: 'POST',
//       headers: {'content-type': 'application/json'},
//       body: JSON.stringify(form)
//     }
//     fetch('http://localhost:3000', options);

//     setForm(INITIAL_STATE)
//   }

//   // common event listener callback function
//   const handleChange = (event) => {
//     const { name, type, value, checked } = event.target;
//     if (type === 'checkbox') {
//       setForm({ ...form, [name]: checked })
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   }

//   const contactOptions = ["phone", "email", "letter"];

//   return (
//     <form className="form-stack" onSubmit={submitForm}>
//       <h2>Complaining form!</h2>
//       <label>
//         First name
//         <input
//           onChange={(event) => handleChange(event)}
//           value={form.firstName}
//           type="text"
//           name="firstName"
//         />
//       </label>

//       <label>
//         Last name
//         <input
//           onChange={(event) => handleChange(event)}
//           value={form.lastName}
//           type="text"
//           name="lastName"
//         />
//       </label>
//       <label>
//         Age:
//         <input
//           onChange={(event) => handleChange(event)}
//           value={form.age}
//           type="number"
//           name="age"
//         />
//       </label>
//       <label>
//         Your Complaint:
//         <textarea
//           onChange={(event) => handleChange(event)}
//           value={form.complaint}
//           name="complaint"
//         />
//       </label>

//       <p>Contact type:</p>
//       <label>
//         Phone
//         <input
//           onChange={(event) => handleChange(event)}
//           type="radio"
//           value="phone"
//           name="contact"
//           checked={form.contact === 'phone'}
//         />
//       </label>

//       <label>
//         Email
//         <input
//           onChange={(event) => handleChange(event)}
//           type="radio"
//           value="email"
//           name="contact"
//           checked={form.contact === 'email'}
//         />
//       </label>

//       <label>
//         Letter
//         <input
//           onChange={(event) => handleChange(event)}
//           type="radio"
//           value="letter"
//           name="contact"
//           checked={form.contact === 'letter'}
//         />
//       </label>

//       <label>
//         Do you consent to the terms and conditions?
//         <input
//           onChange={(event) => handleChange(event)}
//           type="checkbox"
//           name="consent"
//           checked={form.consent}
//         />
//       </label>

//       <label>
//         Do you want to subscribe to our rubbish emails?
//         <input
//           onChange={(event) => handleChange(event)}
//           type="checkbox"
//           name="subscription"
//           checked={form.subscription}
//         />
//       </label>

//       <input type="submit" value="Submit!" />
//     </form>
//   )
// }

// export default App
