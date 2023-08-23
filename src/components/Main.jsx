import { useState } from "react";
import AnswersList from "./AnswersList";

const initialValues = {
  bestFeatures: {
    yellow: false,
    squeaks: false,
    logo: false,
    big: false,
  },
  worstBits: {
    yellow: false,
    squeaks: false,
    logo: false,
    big: false,
  },
  spendTime: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  },
  consistency: "",
  colour: "",
  logo: "",
  review: "",
  username: "",
  email: "",
};

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [data, setData] = useState(initialValues);
  const [submittedAnswers, setSubmittedAnswers] = useState([]);
  const [editIndex, setEditIndex] = useState(null)

  const handleEditClick = (index) => {
    setEditIndex(index);
    const previousData = submittedAnswers[index];
  
    const transformArray = (arr, fieldName) => {
      const obj = {};
      Object.keys(initialValues[fieldName]).forEach((key) => {
        obj[key] = arr.includes(key);
      });
      return obj;
    };
  
    const updatedData = {
      ...previousData,
      bestFeatures: transformArray(previousData.bestFeatures, 'bestFeatures'),
      worstBits: transformArray(previousData.worstBits, 'worstBits'),
      spendTime: transformArray(previousData.spendTime, 'spendTime'),
    };
  
    setData(updatedData);
  };


  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === 'checkbox') {
      const fieldName = name
      setData((prevState) => ({
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          [value] : checked
        }
      }))
    } else {
      setData({
        ...data,
        [name]: value
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedBestFeatures = Object.keys(data.bestFeatures).filter(key => data.bestFeatures[key]);
    const processedWorstBits = Object.keys(data.worstBits).filter(key => data.worstBits[key]);
    const processedTimeSpent = Object.keys(data.spendTime).filter(key => data.spendTime[key]);
    
    const processedData = {
      ...data,
      bestFeatures: processedBestFeatures,
      worstBits: processedWorstBits,
      spendTime: processedTimeSpent,
    };

    if (editIndex !== null) {
      const updatedAnswers = [...submittedAnswers]
      updatedAnswers[editIndex] = processedData
      setSubmittedAnswers(updatedAnswers)
      setEditIndex(null)
    } else {
      setSubmittedAnswers([...submittedAnswers, processedData])
    }
    setData(initialValues)
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedAnswers} handleEdit={handleEditClick} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
              <h3>
                What would you say that are the best features of your rubber duck?
              </h3>
              <ul>
                <li>
                  <label>
                    <input id="yellow" name="bestFeatures" type="checkbox" value="yellow" onChange={handleChange} checked={data.bestFeatures.yellow} />
                    It's yellow
                  </label>
                </li>
                <li>
                  <label>
                    <input id="squeaks" name="bestFeatures" type="checkbox" value="squeaks" onChange={handleChange} checked={data.bestFeatures.squeaks} />
                    It's squeaks
                  </label>
                </li>
                <li>
                  <label>
                    <input id="logo" name="bestFeatures" type="checkbox" value="logo" onChange={handleChange} checked={data.bestFeatures.logo} />
                    It has a logo
                  </label>
                </li>
                <li>
                  <label>
                    <input id="big" name="bestFeatures" type="checkbox" value="big" onChange={handleChange} checked={data.bestFeatures.big}  />
                    It's big
                  </label>
                </li>
              </ul>
            </div>
            <div className="form__group">
              <h3>
                What would you say that are the worst bits of your rubber duck?
              </h3>
              <ul>
                <li>
                  <label>
                    <input id="yellow" name="worstBits" type="checkbox" value="yellow" onChange={handleChange} checked={data.worstBits.yellow} />
                    It's yellow
                  </label>
                </li>
                <li>
                  <label>
                    <input id="squeaks" name="worstBits" type="checkbox" value="squeaks" onChange={handleChange} checked={data.worstBits.squeaks} />
                    It's squeaks
                  </label>
                </li>
                <li>
                  <label>
                    <input id="logo" name="worstBits" type="checkbox" value="logo" onChange={handleChange} checked={data.worstBits.logo} />
                    It has a logo
                  </label>
                </li>
                <li>
                  <label>
                    <input id="big" name="worstBits" type="checkbox" value="big" onChange={handleChange} checked={data.worstBits.big}  />
                    It's big
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="consistency-one" type="radio" name="consistency" value="1" onChange={handleChange} checked={data.consistency === "1"} />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input id="consistency-two" type="radio" name="consistency" value="2" onChange={handleChange} checked={data.consistency === "2"} />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input id="consistency-three" type="radio" name="consistency" value="3" onChange={handleChange} checked={data.consistency === "3"} />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input id="consistency-four" type="radio" name="consistency" value="4" onChange={handleChange} checked={data.consistency === "4"} />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div> 
          <div className="form__group radio"> 
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="colour" value="1" onChange={handleChange} checked={data.colour === "1"} />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="colour" value="2" onChange={handleChange} checked={data.colour === "2"} />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="colour" value="3" onChange={handleChange} checked={data.colour === "3"} />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="colour" value="4" onChange={handleChange} checked={data.colour === "4"} />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>  

          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo-one" type="radio" name="logo" value="1" onChange={handleChange} checked={data.logo === "1"} />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input id="logo-two" type="radio" name="logo" value="2" onChange={handleChange} checked={data.logo === "2"} />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input id="logo-three" type="radio" name="logo" value="3" onChange={handleChange} checked={data.logo === "3"} />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input id="logo-four" type="radio" name="logo" value="4" onChange={handleChange} checked={data.logo === "4"} />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input id="swimming" name="spendTime" type="checkbox" value="swimming" onChange={handleChange} checked={data.spendTime.swimming} />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input id="bathing" name="spendTime" type="checkbox" value="bathing" onChange={handleChange} checked={data.spendTime.bathing} />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input id="chatting" name="spendTime" type="checkbox" value="chatting" onChange={handleChange} checked={data.spendTime.chatting} />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input id="noTime"  name="spendTime" type="checkbox" value="noTime" onChange={handleChange} checked={data.spendTime.noTime} />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={data.review} onChange={handleChange} ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={data.username} onChange={handleChange} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={data.email} onChange={handleChange} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey" />
        </form>
      </section>
    </main>
  );
}

export default Main;
