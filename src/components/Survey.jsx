import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import { RadioInput } from "./RadioInput";
import { CheckBoxes } from "./CheckBoxes";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const url = "http://localhost:3000/Surveys"

  
  const [answersList, setAnswerList] = useState([])

  // Initial get of server
  useEffect(() =>{

    const fetchdata = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setAnswerList(newData.reverse())
  };

  fetchdata()
  }, [])
  
  useEffect(() => {
    setInput(resetInput())
  }, [answersList]);

  const resetInput = () => {
    return {colour: null, timeSpent: [], review: '', username: '', email: ''}
  }

  const [edit, setEdit] = useState(-1)
  const [input, setInput] = useState(resetInput())



  const submit = async (e) => {
    e.preventDefault()
    if(edit == -1){

      const apiRequest = {
        method: "POST",
        body: JSON.stringify(input)
      }
      let index = await fetch(url, apiRequest).then(res => res.json().then(data => data.id))
      setAnswerList([{...input, id: index}, ...answersList])
    }
    else{
      let alteredList = [...answersList]
      alteredList[edit] = input
      const apiRequest = {
        method: "PUT",
        body: JSON.stringify(input)
      }
      fetch(url + `/${input.id}`, apiRequest)
      console.log("altered: ", alteredList)
      setAnswerList(alteredList)
    }

    setInput(resetInput())
    setEdit(-1)
  }

  const del = (item) => {
    fetch(url + `/${item.id}`, {
      method: "DELETE"
    })
    setAnswerList(answersList.filter(elm => elm.id != item.id))
  }

  function textboxChange(e){
    setInput({...input, review: e.target.value})
  }

  const usernameChange = (e) => {
    setInput({...input, username: e.target.value})
  }

  const emailChange = (e) => {
    setInput({...input, email: e.target.value})
  }

  useEffect(() => {
    if(edit != -1){
      // LEGACY: one-line did not create copy of array, but used reference instead
      setInput({...answersList[edit], timeSpent: [...answersList[edit].timeSpent]})
    }
  }, [edit, answersList])





  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} setEdit={setEdit} delete={del}/>
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioInput input={input} setInput={setInput}/>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckBoxes input={input} setInput={setInput}/>
          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea
              name="review"
              cols="30"
              rows="10"
              onChange={textboxChange}
              value = {input.review}
            ></textarea></label
          ><label
            >Put your username here (if you feel like it):<input
              type="text"
              name="userusername"
              onChange={usernameChange} 
              value = {input.username}/></label
          ><label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              onChange={emailChange}
              value = {input.email} /></label
          ><input className="form__submit" type="submit" value="Submit Survey!" onClick={submit} />
        </form>
      </section>
    </main>
  );
}

export default Survey;
