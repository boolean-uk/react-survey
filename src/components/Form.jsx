export default function Form({ form, submitForm, handleChange }) {

    const radioOpts = ["color-one", "color-two", "color-three", "color-four"];
    const checkboxOpts = ["swimming", "bathing", "chatting", "none"];

    return(
    <>
      <form className="form" onSubmit={submitForm} >
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
          {radioOpts.map((opt, idx) => 
          <li key={idx}>
            <input id={opt} type="radio" name="colour" 
            value={idx + 1} onChange={(e) => handleChange(e)} />
            <label htmlFor={opt}>{idx + 1}</label>
          </li> 
          )}
          </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck?</h3>
          <ul>
            {checkboxOpts.map((opt, idx) =>
            <li key={idx}>
                <label>
                    <input type="checkbox" name="timeSpent" 
                    value={opt} onChange={(e) => handleChange(e)} />
                    {`${opt.charAt(0).toUpperCase() + opt.slice(1)}`}
                </label>
            </li>
            )}
          </ul>
        </div>
        <label>What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={form.review}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>
        <label>Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)} />
        </label>
        <label>Leave us your email pretty please??<input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)} />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </>       
    )
} 
