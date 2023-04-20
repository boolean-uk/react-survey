import { useState } from "react";
 
 

 

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [ formData, setFormData ] = useState({
    // form__group_radio1 : false,
    // form__group_radio2 : false,
    // form__group_radio3 : false,
    // form__group_radio4 : false,
  
    spent: [],
    review : '',
    text: '',
    email: '',
    color:'' 
  
  })


  const handleChange = (event) => {
    const { name, type , value } = event.target

    if (type === "radio") {
      for (i=1 ; i<=4; i++) {
          if ( value === 'i') {
            setFormData({...formData, color : value})
          }
      }


    } else if (type === "checkbox") { 
      if (name === 'swimming') {
        setFormData({...formData, spent : value})
      }
      if (name === 'bathing') {
        setFormData({...formData, spent : value})
      }
      if (name === 'chatting') {
        setFormData({...formData, spent : value})
      }
      if (name === 'notime') {
        setFormData({...formData, spent : value})
      }

    } else if (type === 'review') {
      setFormData({...formData, review: value})

    } else if (type === 'text') {
      setFormData({...formData, review: value})
    } else if (type === 'email') {
      setFormData({...formData, review: value})
    }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log(formData)
  }
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className= "form" on Submit={handleSubmit} >
        <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
              <RadioInput 
              label = '1'
              id = 'color-one'
              type = 'radio'
              name = 'color'
              value = '1'
              color={formData.color}
              onChange={handleChange}
              />

              <RadioInput 
              label = '2'
              id = 'color-two'
              type = 'radio'
              name = 'color'
              value = '2'
              color={formData.color}
              onChange={handleChange}
              />

              <RadioInput 
              label = '3'
              id = 'color-three'
              type = 'radio'
              name = 'color'
              value = '3'
              color ={formData.color}
              onChange={handleChange}
              />

              <RadioInput 
              label = '4'
              id = 'color-three'
              type = 'radio'
              name = 'color'
              value = '4'
              color={formData.color}
              onChange={handleChange}
              />
              </div>

              <div class="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <CheckBox
              label = 'swimming'
              name = 'swimming'
              type = 'checkbox' 
              value={formData.spent}
              onChange={handleChange}
              />

              <CheckBox
              label = 'bathing'
              name = 'bathing'
              type = 'checkbox' 
              value={formData.spent}
              onChange={handleChange}
              />

              <CheckBox
              label = 'chatting'
              name = 'chatting'
              type = 'checkbox' 
              value={formData.spent}
              onChange={handleChange}
              />

              <CheckBox
              label = 'I dont like to spend time with it'
              name = 'notime'
              type = 'checkbox' 
              value={formData.form__group4}
              onChange={handleChange}
              />
              </div>

              <div class= 'review'>
                <TextArea 
                label = "What else have you got to say about your rubber duck?"
                name= "review" 
                cols= "30" 
                rows= "10"
                value = {formData.review}
                onChange = {handleChange}
                />
               </div> 

              < div class='text'>
                <Input 
                label = 'Put your name here (if you feel like it):'
                type = 'text'
                name = 'username'
                value = {formData.text}
                onChange = {handleChange}
              /> 
              <Input
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
}
