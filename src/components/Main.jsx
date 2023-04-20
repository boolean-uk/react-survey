import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [ formData, setFormData ] = useState({
    form__group_radio : '',
    form__group : '',
    review : '',
    text: '',
    email: ''

  })



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
              checkedOption={formData.form__group_radio}
              onChange={handleChange}
              />

              <RadioInput 
              label = '2'
              id = 'color-two'
              type = 'radio'
              name = 'color'
              value = '2'
              checkedOption={formData.form__group_radio}
              onChange={handleChange}
              />

              <RadioInput 
              label = '3'
              id = 'color-three'
              type = 'radio'
              name = 'color'
              value = '3'
              checkedOption={formData.form__group_radio}
              onChange={handleChange}
              />

              <RadioInput 
              label = '4'
              id = 'color-three'
              type = 'radio'
              name = 'color'
              value = '3'
              checkedOption={formData.form__group_radio}
              onChange={handleChange}
              />
              </div>

              <div class="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <CheckBox
              label = 'swimming'
              name = 'spend-time'
              type = 'checkbox' 
              value={formData.form__group}
              onChange={handleChange}
              />

              <CheckBox
              label = 'bathing'
              name = 'spend-time'
              type = 'checkbox' 
              value={formData.form__group}
              onChange={handleChange}
              />

              <CheckBox
              label = 'chatting'
              name = 'spend-time'
              type = 'checkbox' 
              value={formData.form__group}
              onChange={handleChange}
              />

              <CheckBox
              label = 'I dont like to spend time with it'
              name = 'spend-time'
              type = 'checkbox' 
              value={formData.form__group}
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
              <input type = "submit" 
              value = "Submit!"/>

        </form>
      </section>
    </main>
  );
}

export default Main;
