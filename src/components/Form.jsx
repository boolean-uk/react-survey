function Form(props) {

    const {formData, handleChange, handleSpendTime, handleSubmit} = props
    
    return(
        <form class="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div class="form__group radio" onChange={handleChange}>
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" checked={formData.color === "1"}/>
              <label for="color-one">1</label>
            </li>
            <li>
              <input id="color-two" type="radio" name="color" value="2" checked={formData.color === "2"}/><label
                for="color-two" 
                >2</label
              >
            </li>
            <li>
              <input id="color-three" type="radio" name="color" value="3" checked={formData.color === "3"}/><label
                for="color-three" 
                >3</label
              >
            </li>
            <li>
              <input id="color-four" type="radio" name="color" value="4" checked={formData.color === "4"}/><label
                for="color-four" 
                >4</label
              >
            </li>
          </ul>
        </div>
        <div class="form__group" onChange={handleSpendTime}>
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label
                ><input
                  name="spend-time"
                  type="checkbox"
                  value="swimming"
                  checked={formData.spendTime.indexOf("swimming") !== -1}
                />Swimming</label
              >
            </li>
            <li>
              <label
                ><input name="spend-time" type="checkbox" value="bathing" checked={formData.spendTime.indexOf("bathing") !== -1}/>Bathing</label
              >
            </li>
            <li>
              <label
                ><input
                  name="spend-time"
                  type="checkbox"
                  value="chatting"
                  checked={formData.spendTime.indexOf("chatting") !== -1}
                />Chatting</label
              >
            </li>
            <li>
              <label
                ><input name="spend-time" type="checkbox" value="noTime" checked={formData.spendTime.indexOf("noTime") !== -1}/>I don't like to
                spend time with it</label
              >
            </li>
          </ul>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={formData.review}
            onChange={handleChange}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange} /></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} /></label
        ><input class="form__submit" type="submit" value="Submit Survey!" />
      </form>
    )
}
export default Form