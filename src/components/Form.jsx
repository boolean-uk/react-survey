import RadioBtn from './RadioBtn'
import CheckBox from './CheckBox'
import { useState } from 'react'


function Form(props){
const [username, setUsername] = useState('')
const [review, setReview] = useState('')
const [email, setEmail] = useState('')
const [colour, setColour] = useState('')
const [timeSpent, setTimeSpent] = useState([])

const [prevAnswer, setPrevAnswer] = useState({})


const handleSubmit = (e) =>{
    e.preventDefault()
    props.saveAnswer({id:prevAnswer.id? prevAnswer.id:'',email,username,colour,timeSpent,review})
    setColour('')
    setEmail('')
    setUsername('')
    setReview('')
    setTimeSpent([])
    setPrevAnswer({})

    let boxes = document.querySelectorAll('.checkbox')
    boxes.forEach(box=> box.checked=false)

    let radio = document.querySelectorAll('.radio')
    radio.forEach(box=> box.checked=false)
}

function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
    
    
   if (inputName === "review") {
    setReview(inputValue);
    }
    if (inputName === "email") {
    setEmail(inputValue);
    }
    if (inputName === "username") {
        setUsername(inputValue);
    }
    if (inputType === "checkbox") {
        let updatedArray = event.target.checked ? [...timeSpent, inputValue] : timeSpent.filter(item => item !== inputValue);
        setTimeSpent(updatedArray)
        
    }
    if (inputType === "checkbox") {
        let updatedArray = event.target.checked ? [...timeSpent, inputValue] : timeSpent.filter(item => item !== inputValue);
        setTimeSpent(updatedArray)
        
    }
    if (inputType === "radio") {
        
        setColour(inputValue)
    }

}

if((props.prevAnswer !== false) && (prevAnswer.id == undefined || prevAnswer ===false )){
    setPrevAnswer({id:props.prevAnswer.id, username:props.prevAnswer.username, email:props.prevAnswer.email, review:props.prevAnswer.review,colour:props.prevAnswer.colour, timeSpent:props.prevAnswer.timeSpent})
    setColour(props.prevAnswer.colour)
    setEmail(props.prevAnswer.email)
    setUsername(props.prevAnswer.username)
    setReview(props.prevAnswer.review)
    setTimeSpent(props.prevAnswer.timeSpent)
    
    let boxes = document.querySelectorAll('.checkbox')
    boxes.forEach(box=> props.prevAnswer.timeSpent.indexOf(box.value) >= 0 ? box.checked=true:box.checked=false)

    let radio = document.querySelectorAll('.radio')
    radio.forEach(btn => props.prevAnswer.colour.indexOf(btn.value) >= 0 ? btn.checked = true: btn.checked = false)
}else if((props.prevAnswer !== false) && (prevAnswer.id != props.prevAnswer.id || prevAnswer ===false )){
    setPrevAnswer({id:props.prevAnswer.id, username:props.prevAnswer.username, email:props.prevAnswer.email, review:props.prevAnswer.review,colour:props.prevAnswer.colour, timeSpent:props.prevAnswer.timeSpent})
    setColour(props.prevAnswer.colour)
    setEmail(props.prevAnswer.email)
    setUsername(props.prevAnswer.username)
    setReview(props.prevAnswer.review)
    setTimeSpent(props.prevAnswer.timeSpent)
    
    let boxes = document.querySelectorAll('.checkbox')
    boxes.forEach(box=> props.prevAnswer.timeSpent.indexOf(box.value) >= 0 ? box.checked=true:box.checked=false)

    let radio = document.querySelectorAll('.radio')
    radio.forEach(btn => props.prevAnswer.colour.indexOf(btn.value) >= 0 ? btn.checked = true: btn.checked = false)

}



return(
<form className="form" onSubmit={(e)=> handleSubmit(e)} > 
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <RadioBtn onChange={(event)=> handleChange(event)}/>
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
    <CheckBox onChange={(event)=> handleChange(event)}/>
    </div>
    <label>What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
        value={review}
        onChange={(event)=> handleChange(event)}
      ></textarea></label>
      <label>Put your name here (if you feel like it):<input
        type="text"
        name="username"
        value={username}
        onChange={(event)=> handleChange(event)}/></label>
        <label>Leave us your email pretty please??<input type="email"
        name="email"
        value={email}
        onChange={(event)=> handleChange(event)}/></label>
        <input className="form__submit" type="submit" value="Submit Survey!" 
        />
  </form>
    
)
}

export default Form


