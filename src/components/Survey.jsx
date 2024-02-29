import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

const initSurveyData = {
  bestFeature: [], 
  worstBit: [],
  consistency: 0, 
  colour: 0, 
  logo: 0,
  timeSpent: [], 
  review: "", 
  username: "", 
  email: ""
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [surveyDataList, setSurveyDataList] = useState([]);
  const [surveyData, setSurveyData] = useState(initSurveyData);

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name 
    const type = e.target.type 

    if (type === "checkbox") {
      if (surveyData[name].includes(value)) {
        const newArray = surveyData[name].filter(item => item !== value)
        setSurveyData({...surveyData, [name]: newArray})
      }
      else {
        const newArray = [...surveyData[name], value]
        setSurveyData({...surveyData, [name]: newArray})
      }
    }
    else {
      setSurveyData({...surveyData, [name]: value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSurveyDataList([...surveyDataList, surveyData])
    console.log("Submitted: ", surveyData)
    setSurveyData(initSurveyData)
  }

  console.log(surveyData)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        < AnswersList answersList={surveyDataList}/>
      </section>
      <section className="survey__form">
        < Form handleChange={handleChange} surveyData={surveyData} handleSubmit={handleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
