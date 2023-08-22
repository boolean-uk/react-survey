import { useState } from "react";

import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  
  const [dataForm, setDataForm] = useState({
    colour: '',
    review: '',
    username: '',
    email: '',
    timeSpent: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    }
  })
  const [formList, setFormList] = useState([])
  const [editState, setEditState] = useState(-1)
  
  const handleChange = (event) => {
    const {name, value, checked} = event.target
    if (name === 'timeSpent'){
        setDataForm({
          ...dataForm,
          timeSpent: {...dataForm.timeSpent, [value]: checked}
        })
    } else {
      setDataForm({
        ...dataForm,
        [name]: value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (editState === -1) {
      setFormList([...formList, dataForm])
      console.log(dataForm)
    } else {
      formList[editState] = dataForm
      setFormList([...formList])
      setEditState(-1)
    }
    setDataForm({
      colour: '',
      review: '',
      username: '',
      email: '',
      timeSpent: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false
      }
    })
  }
  
  const handleEdit = (index) => {
    setDataForm(formList[index])
    setEditState(index)
  }

  const handleDelete = (index) => {
    formList.splice(index,1)
    setFormList([...formList])
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={formList} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </section>
      <section className="main__form">
        <form onSubmit={handleSubmit} className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input onChange={handleChange} id="color-one" type="radio" name="colour" value="1" checked={dataForm.colour === '1'}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-two" type="radio" name="colour" value="2" checked={dataForm.colour === '2'}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-three" type="radio" name="colour" value="3" checked={dataForm.colour === '3'}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-four" type="radio" name="colour" value="4" checked={dataForm.colour === '4'}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={dataForm.timeSpent.swimming}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="timeSpent" 
                  type="checkbox" 
                  value="bathing"
                  checked={dataForm.timeSpent.bathing}
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
                    checked={dataForm.timeSpent.chatting}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="timeSpent" 
                  type="checkbox" 
                  value="noTime" 
                  checked={dataForm.timeSpent.noTime}
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
