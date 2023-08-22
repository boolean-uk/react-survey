import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({ 
    features: '',
    worstBits: '',
    consistency: '',
    colour: '',
    logo: '',
    timeSpent: '',
    review: '',
    username: '',
    email: '',
  })

  const handleChange = (event) => {
    const { name, value, type, checked} = event.target

    if (type === "checkbox" && (name === "features" || "worstBits")) {
      setFormData(checked)
    }

    setFormData({
      ...formData,
          [name]: value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)
    console.log()

    setFormData({
      features: '',
      worstBits: '',
      consistency: '',
      colour: '',
      logo: '',
      timeSpent: '',
      review: '',
      username: '',
      email: '',
    });
  }
    
   return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <answers should go here> */}
      </section>
      <section className="main__form">{
        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div class="form__group">
    <h3>What would you say that are the best features of your rubber duck?</h3>
    <ul>
      <li>
        <label>
        <input
        id="featuresColour"
        name="features"
        type="checkbox"
        value="yellow"
        onChange={handleChange}
        checked={formData.features === "yellow"}
        />
      <span className="checkbox-label">It's yellow!</span>
      </label>
      </li>
      <li>
        <label>
        <input
        id="featuresSqueaks"
        name="features"
        type="checkbox"
        value="squeaks"
        onChange={handleChange}
        checked={formData.features === "squeaks"}
        />
        It squeaks!!
      </label>
      </li>
      <li>
        <label>
        <input
        id="featuresLogo"
        name="features"
        type="checkbox"
        value="logo"
        onChange={handleChange}
        checked={formData.features === "logo"}
        />
        It has a logo!
      </label>
      </li>
      <li>
        <label>
        <input
        id="featuresBig"
        name="features"
        type="checkbox"
        value="big"
        onChange={handleChange}
        checked={formData.features === "big"}
        />
        It's big!
      </label>
      </li>
    </ul>
  <h3>What would you say that are the worst bits of your rubber duck?</h3>
  <ul>
      <li>
        <label>
        <input
        id="worstBitsColour"
        name="worstBits"
        type="checkbox"
        value="yellow"
        onChange={handleChange}
        checked={formData.worstBits === "yellow"}
        />
      It's yellow!
      </label>
      </li>
      <li>
        <label>
        <input
        id="worstBitsSqueaks"
        name="worstBits"
        type="checkbox"
        value="squeaks"
        onChange={handleChange}
        checked={formData.worstBits === "squeaks"} 
        />
        It squeaks!!
      </label>
      </li>
      <li>
        <label>
        <input
        id="worstBitsLogo"
        name="worstBits"
        type="checkbox"
        value="logo"
        onChange={handleChange}
        checked={formData.worstBits === "logo"}
        />
        It has a logo!
      </label>
      </li>
      <li>
        <label>
        <input
        id="worstBitsBig"
        name="worstBits"
        type="checkbox"
        value="big"
        onChange={handleChange}
        checked={formData.worstBits === "big"}
        />
        <span className="checkbox-label">It's big!</span>
      </label>
      </li>
    </ul>
    </div>
      <div class="form__group radio">
    <h3>How do you rate your rubber duck consistency?</h3>
          <ul>
        <li>
        <input
  id="consistency-one"
  name="consistency"
  value="1"
  type="radio"
  onChange={handleChange}
  checked={formData.consistency === "1"}
/>
<label htmlFor="consistency-one">1</label>

<input
  id="consistency-two"
  name="consistency"
  value="2"
  type="radio"
  onChange={handleChange}
  checked={formData.consistency === "2"}
/>
<label htmlFor="consistency-two">2</label>

<input
  id="consistency-three"
  name="consistency"
  value="3"
  type="radio"
  onChange={handleChange}
  checked={formData.consistency === "3"}
/>
<label htmlFor="consistency-three">3</label>

<input
  id="consistency-four"
  name="consistency"
  value="4"
  type="radio"
  onChange={handleChange}
  checked={formData.consistency === "4"}
/>
<label htmlFor="consistency-four">4</label>
  </li>
  </ul>
      <h3>How do you rate your rubber duck colour?</h3>
    <ul>
    <li>
    <input
  id="color-one"
  name="colour"
  value="1"
  type="radio"
  onChange={handleChange}
  checked={formData.colour === "1"}
/>
<label htmlFor="color-one">1</label>

<input
  id="color-two"
  name="colour"
  value="2"
  type="radio"
  onChange={handleChange}
  checked={formData.colour === "2"}
/>
<label htmlFor="color-two">2</label>

<input
  id="color-three"
  name="colour"
  value="3"
  type="radio"
  onChange={handleChange}
  checked={formData.colour === "3"}
/>
<label htmlFor="color-three">3</label>

<input
  id="color-four"
  name="colour"
  value="4"
  type="radio"
  onChange={handleChange}
  checked={formData.colour === "4"}
/>
<label htmlFor="color-four">4</label>
  </li>
  </ul>
  <h3>How do you rate your rubber duck logo?</h3>
          <ul>
        <li>
        <input
  id="logo-one"
  name="logo"
  value="1"
  type="radio"
  onChange={handleChange}
  checked={formData.logo === "1"}
/>
<label htmlFor="logo-one">1</label>

<input
  id="logo-two"
  name="logo"
  value="2"
  type="radio"
  onChange={handleChange}
  checked={formData.logo === "2"}
/>
<label htmlFor="logo-two">2</label>

<input
  id="logo-three"
  name="logo"
  value="3"
  type="radio"
  onChange={handleChange}
  checked={formData.logo === "3"}
/>
<label htmlFor="logo-three">3</label>

<input
  id="logo-four"
  name="logo"
  value="4"
  type="radio"
  onChange={handleChange}
  checked={formData.logo === "4"}
/>
<label htmlFor="logo-four">4</label>
  </li>
  </ul>
  </div>
  <div class="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
      <li>
        <label>
        <input
        id="timeSpentSwimming"
        name="timeSpent"
        type="checkbox"
        value="swimming"
        onChange={handleChange}
        checked={formData.timeSpent === "swimming"}
        />
      Swimming
      </label>
      </li>
      <li>
        <label>
        <input
        id="timeSpentBathing"
        name="timeSpent"
        type="checkbox"
        value="bathing"
        onChange={handleChange}
        checked={formData.timeSpent === "bathing"}
        />
        Bathing
      </label>
      </li>
      <li>
        <label>
        <input
        id="timeSpentChatting"
        name="timeSpent"
        type="checkbox"
        value="chatting"
        onChange={handleChange}
        checked={formData.timeSpent === "chatting"}
        />
        Chatting
      </label>
      </li>
      <li>
        <label>
        <input
        id="timeSpentNot"
        name="timeSpent"
        type="checkbox"
        value="not"
        onChange={handleChange}
        checked={formData.timeSpent === "not"}
        />
        I don't like to spend time with it
      </label>
      </li>
    </ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      id="reviewForm"
      cols="30"
      rows="10"
      value={formData.review}
      onChange={handleChange}
    ></textarea>
    </label>
  <label
    >Put your name here (if you feel like it):
    <input
      type="text"
      name="username"
      id="usernameForm"
      value={formData.username}
      onChange={handleChange} />
      </label>
    <label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      id="emailForm"
      value={formData.email}
      onChange={handleChange}/>
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" /> 
        </form>
      }</section>
    </main>
  )
  }

export default Main;
