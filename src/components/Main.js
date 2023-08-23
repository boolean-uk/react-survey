import React, { useState } from 'react'
import AnswersList from './AnswersList'

function Main() {
  const [open, setOpen] = useState(false); 

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    consistency: '',
    logo: '',
    colour: '',
    timeSpent: [],
    bestFeatures: [],
    worstBits: [],
    review: '',
  });

  const [answersList, setAnswersList] = useState([]); 

  const [editMode, setEditMode] = useState(false);

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (editIndex) => {
    setEditIndex(editIndex);
    setFormData(answersList[editIndex]);
    setEditMode(true);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (editMode) {
    const updatedAnswersList = [...answersList];
    updatedAnswersList[editIndex] = formData;
    setAnswersList(updatedAnswersList);
    setEditMode(false);
    setEditIndex(null);
  } else {
    setAnswersList([...answersList, formData]);
  }

  setFormData({
    username: "",
    email: "",
    consistency: "",
    logo: "",
    colour: "",
    timeSpent: [],
    bestFeatures: [],
    worstBits: [],
    review: "",
  });
};

  const handleInputChange = (e, answerItem) => {
    const { name, value, type, checked } = e.target;
  
    if (name === "timeSpent" || name === "bestFeatures" || name === "worstBits") {
      const updatedArray = [...formData[name]];
  
      if (checked) {
        updatedArray.push(value);
      } else {
        const index = updatedArray.indexOf(value);
        if (index !== -1) {
          updatedArray.splice(index, 1);
        }
      }
  
      setFormData({
        ...formData,
        [name]: updatedArray,
      });

    } else {
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };
  
  const handleDelete = (deletedAnswer) => {
    const updatedAnswersList = answersList.filter(
      (item) => item !== deletedAnswer
    );
    setAnswersList(updatedAnswersList);
    }
  
  return (
    <main className="main">
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} handleDelete={handleDelete} handleEdit={(index) => handleEdit(index)} /> 
      </section>
      <section className="main__form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="yellow"
                    checked={formData.bestFeatures.includes('yellow')}
                    onChange={handleInputChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="squeaks"
                    checked={formData.bestFeatures.includes('squeaks')}
                    onChange={handleInputChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="logo"
                    checked={formData.bestFeatures.includes('logo')}
                    onChange={handleInputChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures"
                    type="checkbox"
                    value="big"
                    checked={formData.bestFeatures.includes('big')}
                    onChange={handleInputChange}
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
                    name="worstBits"
                    type="checkbox"
                    value="yellow"
                    checked={formData.worstBits.includes('yellow')}
                    onChange={handleInputChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="squeaks"
                    checked={formData.worstBits.includes('squeaks')}
                    onChange={handleInputChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="logo"
                    checked={formData.worstBits.includes('logo')}
                    onChange={handleInputChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstBits"
                    type="checkbox"
                    value="big"
                    checked={formData.worstBits.includes('big')}
                    onChange={handleInputChange}
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
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  checked={formData.consistency === '1'}
                  onChange={handleInputChange}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  checked={formData.consistency === '2'}
                  onChange={handleInputChange}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  checked={formData.consistency === '3'}
                  onChange={handleInputChange}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  checked={formData.consistency === '4'}
                  onChange={handleInputChange}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="colour-one"
                  type="radio"
                  name="colour"
                  value="1"
                  checked={formData.colour === '1'}
                  onChange={handleInputChange}
                />
                <label htmlFor="colour-one">1</label>
              </li>
              <li>
                <input
                  id="colour-two"
                  type="radio"
                  name="colour"
                  value="2"
                  checked={formData.colour === '2'}
                  onChange={handleInputChange}
                />
                <label htmlFor="colour-two">2</label>
              </li>
              <li>
                <input
                  id="colour-three"
                  type="radio"
                  name="colour"
                  value="3"
                  checked={formData.colour === '3'}
                  onChange={handleInputChange}
                />
                <label htmlFor="colour-three">3</label>
              </li>
              <li>
                <input
                  id="colour-four"
                  type="radio"
                  name="colour"
                  value="4"
                  checked={formData.colour === '4'}
                  onChange={handleInputChange}
                />
                <label htmlFor="colour-four">4</label>
              </li>
              </ul>
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  checked={formData.logo === '1'}
                  onChange={handleInputChange}
                />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  checked={formData.logo === '2'}
                  onChange={handleInputChange}
                />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  checked={formData.logo === '3'}
                  onChange={handleInputChange}
                />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  checked={formData.logo === '4'}
                  onChange={handleInputChange}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={formData.timeSpent.includes('swimming')}
                    onChange={handleInputChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={formData.timeSpent.includes('bathing')}
                    onChange={handleInputChange}
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
                    checked={formData.timeSpent.includes('chatting')}
                    onChange={handleInputChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={formData.timeSpent.includes('noTime')}
                    onChange={handleInputChange}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formData.review}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;