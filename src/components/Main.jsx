import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState(""); 
  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Color:", selectedColor);
    console.log("Checked Items:", checkedItems);
    
    setSelectedColor("");
    setCheckedItems([]); 
  };



  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <form className="form">
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* Radio inputs go here */}
              <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={selectedColor === "1"}
                  onChange={handleColorChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={selectedColor === "2"}
                  onChange={handleColorChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={selectedColor === "3"}
                  onChange={handleColorChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={selectedColor === "4"}
                  onChange={handleColorChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* Checkboxes go here */}
            <label>
              <input
                type="checkbox"
                name="activity"
                value="Bathing"
                checked={checkedItems.includes("Bathing")}
                onChange={handleCheckboxChange}
              />
              Bathing
            </label>
            <label>
              <input
                type="checkbox"
                name="activity"
                value="Swimming"
                checked={checkedItems.includes("Swimming")}
                onChange={handleCheckboxChange}
              />
              Swimming
            </label>
            <label>
              <input
                type="checkbox"
                name="activity"
                value="Chatting"
                checked={checkedItems.includes("Chatting")}
                onChange={handleCheckboxChange}
              />
              Chatting
            </label>
            
             <label>
              <input
                type="checkbox"
                name="activity"
                value="I don't like to spend time with it"
                checked={checkedItems.includes("I don't like to spend time with it")}
                onChange={handleCheckboxChange}
              />
              I don't like to spend time with it
            </label>
            
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;

