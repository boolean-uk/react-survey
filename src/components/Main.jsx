import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [rateDuck, setRateDuck] = useState({
    color: '',
    spendTime: {
      swimming: false,
      chatting: false,
      noTime: false,
      bathing: false
    },
    review: '',
    username: '',
    email: '',



  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(rateDuck)
    //make an function that deletes everything after it's being 
    setRateDuck({
      color: '',
      spendTime: {
        swimming: false,
        chatting: false,
        noTime: false,
        bathing: false
      },
      review: '',
      username: '',
      email: '',

    })
  }

  const handleChange = (event) => {
    const { name, type, value, checked} = event.target
    
    if (type === 'checkbox') {
      
      const updatedTime = {
        ...rateDuck.spendTime, [value]: checked
        // the actual value of checked is changed
      }
      // if (value === 'swimming') {
      //   updatedTime.swimming = checked
      // } The long way to show what the code above this does, you'd have to add this for all of them, this is just an example so you'll understand tomorrow morning.
      
      setRateDuck({...rateDuck, spendTime: updatedTime }) 
     
    } else {
      setRateDuck({...rateDuck, [name]: value })
    }
    
    //console.log(event.target.value)
  }

  //console.log(rateDuck)
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
      <form className="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    
    <ul>
  <li>
    <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={rateDuck.color ==='1'} /><label
      for="color-one"
      >1</label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={rateDuck.color === '2'} /><label
      for="color-two"
      >2</label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={rateDuck.color === '3'} /><label
      for="color-three"
      >3</label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={rateDuck.color === '4'} /><label
      for="color-four"
      >4</label>
  </li>
</ul>


  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
      
    
<ul>
  <li>
    <label
      ><input
        name="spendTime"
        type="checkbox"
        value="swimming"
        onChange={handleChange}
        checked={rateDuck.spendTime.swimming}
      />Swimming</label>
  </li>
  <li>
    <label
      ><input 
      name="spendTime" 
      type="checkbox" 
      value="bathing" 
      onChange={handleChange}
      checked={rateDuck.spendTime.bathing }/>
      Bathing</label>
  </li>
  <li>
    <label
      ><input
        name="spendTime"
        type="checkbox"
        value="chatting"
        onChange={handleChange}
        checked={rateDuck.spendTime.chatting}
      />Chatting</label>
  </li>
  <li>
    <label
      ><input 
        name="spendTime" 
        type="checkbox" 
        value="noTime"
        onChange={handleChange}
        checked={rateDuck.spendTime.noTime} />I don't like to
      spend time with it</label>
  </li>
</ul>

  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
      value={rateDuck.review}
      onChange={handleChange}
    ></textarea></label>
    <label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value={rateDuck.username}
      onChange={handleChange}
       /></label>
      
      <label htmlFor="emailInput">
      Leave us your email pretty please??<input
      type="email"
      name="email"
      value={rateDuck.email}
      onChange={handleChange} /></label> <input id="emailInput" className="form__submit" type="submit" value="Submit Survey!"  />
</form>
        </section>
    </main>
  );
}

export default Main;
