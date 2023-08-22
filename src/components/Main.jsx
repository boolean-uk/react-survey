import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  
  const [dataForm, setDataForm] = useState({
    color: '',
    consistency: '',
    logo: '',
    review: '',
    username: '',
    email: '',
    'duck-positive': [],
    'duck-negative': [],
    'spend-time': []
  })
  
  const handleChange = (event) => {
    const {name, value, checked} = event.target
    if (name === 'duck-positive' || name === 'duck-negative' || name === 'spend-time'){
        if (checked){
          setDataForm({
            ...dataForm,
            [name]: [...dataForm[name], value]
          })
        } else {
          dataForm[name].pop(value)
          setDataForm({
            ...dataForm,
            [name]: [...dataForm[name]]
          })
        }
    } else {
      setDataForm({
        ...dataForm,
        [name]: value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(dataForm)
    setDataForm({
      color: '',
      consistency: '',
      logo: '',
      review: '',
      username: '',
      email: '',
      'duck-positive': [],
      'duck-negative': [],
      'spend-time': []
    })
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="duck-positive"
                    type="checkbox"
                    value="It's yellow!"
                    checked={dataForm['duck-positive'].includes("It's yellow!")}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="duck-positive" 
                  type="checkbox" 
                  value="It squeaks!" 
                  checked={dataForm['duck-positive'].includes("It squeaks!")}
                  onChange={handleChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="duck-positive"
                    type="checkbox"
                    value="It has a logo!"
                    checked={dataForm['duck-positive'].includes("It has a logo!")}
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="duck-positive" 
                  type="checkbox" 
                  value="It's big!" 
                  checked={dataForm['duck-positive'].includes("It's big!")}
                  onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="duck-negative"
                    type="checkbox"
                    value="It's yellow!"
                    checked={dataForm['duck-negative'].includes("It's yellow!")}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="duck-negative" 
                  type="checkbox" 
                  value="It squeaks!" 
                  checked={dataForm['duck-negative'].includes("It squeaks!")}
                  onChange={handleChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="duck-negative"
                    type="checkbox"
                    value="It has a logo!"
                    checked={dataForm['duck-negative'].includes("It has a logo!")}
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="duck-negative" 
                  type="checkbox" 
                  value="It's big!" 
                  checked={dataForm['duck-negative'].includes("It's big!")}
                  onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input onChange={handleChange} id="consistency-one" type="radio" name="consistency" value="1" checked={dataForm.consistency === '1'}/>
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input onChange={handleChange} id="consistency-two" type="radio" name="consistency" value="2" checked={dataForm.consistency === '2'}/>
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input onChange={handleChange} id="consistency-three" type="radio" name="consistency" value="3" checked={dataForm.consistency === '3'}/>
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input onChange={handleChange} id="consistency-four" type="radio" name="consistency" value="4" checked={dataForm.consistency === '4'}/>
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input onChange={handleChange} id="color-one" type="radio" name="color" value="1" checked={dataForm.color === '1'}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-two" type="radio" name="color" value="2" checked={dataForm.color === '2'}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-three" type="radio" name="color" value="3" checked={dataForm.color === '3'}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-four" type="radio" name="color" value="4" checked={dataForm.color === '4'}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input onChange={handleChange} id="logo-one" type="radio" name="logo" value="1" checked={dataForm.logo === '1'}/>
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input onChange={handleChange} id="logo-two" type="radio" name="logo" value="2" checked={dataForm.logo === '2'}/>
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input onChange={handleChange} id="logo-three" type="radio" name="logo" value="3" checked={dataForm.logo === '3'}/>
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input onChange={handleChange} id="logo-four" type="radio" name="logo" value="4" checked={dataForm.logo === '4'}/>
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={dataForm['spend-time'].includes('swimming')}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" 
                  type="checkbox" 
                  value="bathing"
                  checked={dataForm['spend-time'].includes('bathing')}
                  onChange={handleChange}
                />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={dataForm['spend-time'].includes('chatting')}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" 
                  type="checkbox" 
                  value="noTime" 
                  checked={dataForm['spend-time'].includes('noTime')}
                  onChange={handleChange}
                />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={dataForm.review}
              onChange={handleChange} 
            ></textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={dataForm.username}
              onChange={handleChange} 
            />
          </label>
          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={dataForm.email}
              onChange={handleChange} 
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
