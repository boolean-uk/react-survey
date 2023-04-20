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
          <div class="form__group radio"></div>
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


        </form>
      </section>
    </main>
  );
}

export default Main;
