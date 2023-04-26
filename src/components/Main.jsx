import { useState } from "react";
 
const initialState = {
  colour: null,
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

 

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialState)
  const [list, setList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    setList([...list, formData])
    
    setFormData({
      colour: null,
      timeSpent: [],
      review: "",
      username: "",
      email: "",
    })
  }


  const handleChange = (e) => {
    const targetName = e.target.name
    const targetValue = e.target.value

    if (type === "checkbox") { 
      if (formData.timeSpent.includes(e.target.value)) {
        //remove the item if it is already in there
        setFormData({
          ...formData,
          timeSpent: formData.filter((time) => time !== e.target.value),
        });
      } else {
        setFormData({
          ...formData,
          timeSpent: [...formData.timeSpent, e.target.value],

        })
      }
    }

    else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }
 
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className= "form" onSubmit={handleSubmit} >
        <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
            <input
                   id="color-one"
                   type="radio"
                   name="colour"
                   value="1"
                   checked={formData.colour === "1"}
                   onChange={handleChange}
                 />
                 <label for="color-one">1</label>
               </li>

               <li>
               <input
                   id="color-two"
                   type="radio"
                   name="colour"
                   value="2"
                   checked={formData.colour === "2"}
                   onChange={handleChange}
                 />
                 <label for="color-one">2</label>
               </li>
               <li>
               <input
                   id="color-three"
                   type="radio"
                   name="colour"
                   value="3"
                   checked={formData.colour === "3"}
                   onChange={handleChange}
                 />
                 <label for="color-one">3</label>
               </li>

               <li>
              <input
                   id="color-four"
                   type="radio"
                   name="colour"
                   value="4"
                   checked={formData.colour === "4"}
                   onChange={handleChange}
                 />
                 <label for="color-one">1</label>
               </li>
               </ul>
              </div>
              

              <div class="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
              <li>
                 <label>
                   <input
                     name="timeSpent"
                     type="checkbox"
                     value="swimming"
                     checked={formData.timeSpent.includes("swimming")}
                     onChange={handleChange}
                   />
                   Swimming
                 </label>
               </li>
               <li>
                 <label>
                   <input
                     name="timeSpent"
                     type="checkbox"
                     value="bathing"
                     checked={formData.timeSpent.includes("bathing")}
                     onChange={handleChange}
                   />
                   Bathing
                 </label>
               </li>
               <li>
                 <label>
                   <input
                     name="timeSpent"
                     type="checkbox"
                     value="chatting"
                     checked={formData.timeSpent.includes("chatting")}
                     onChange={handleChange}
                   />
                   Chatting
                 </label>
               </li>
               <li>
                 <label>
                   <input
                     name="timeSpent"
                     type="checkbox"
                     value="noTime"
                     checked={formData.timeSpent.includes("noTime")}
                     onChange={handleChange}
                   />
                   I don't like to spend time with it
                 </label>
               </li>
             
              </ul>
              </div>

              <div class= 'review'>
                <textarea 
                label = "What else have you got to say about your rubber duck?"
                name= "review" 
                cols= "30" 
                rows= "10"
                value = {formData.review}
                onChange = {handleChange}
                />
               </div> 

              < div class='text'>
                <input 
                label = 'Put your name here (if you feel like it):'
                type = 'text'
                name = 'username'
                value = {formData.text}
                onChange = {handleChange}
              /> 
              <input
              label = 'Leave us your email pretty please??'
              type = 'email'
              name = 'email'
              value = {formData.email}
              onChange = {handleChange}
              />
              </div>

              <div class="form__submit">
              < input 
              type = "submit" 
              value = "Submit!"/>
              </div>

        </form>
      </section>
    </main>
  );
}

