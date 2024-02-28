import { useState } from "react";
import PropTypes from 'prop-types'
import SurveyForm from "./SurveyForm";
import AnswersList from "./AnswersList";

// Defining propsTypes:
Survey.propTypes = {
  answers: PropTypes.object,
  setAnswer: PropTypes.func
};

/* This file is has the main responsible for the survey part. */
function Survey(props) {
  // destructuring props:
  const {answers, setAnswer} = props;
  const [open, setOpen] = useState(false); //Ignore this state

  // Defining states for: 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    features: [],
    // features:{
    //   yellow: false,
    //   squeaks: false,
    //   logo: false,
    //   big: false 
    // },
    worstBits: [],
    consistency: 0,
    colorRate: 0,
    logoRate: 0,
    timeSpent: [],
    // timeSpent: {
    //   swimming: false,
    //   bathing: false,
    //   chatting: false,
    //   other: false 
    // },
    review: ''
  });

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>  
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>


      <section className="survey__form">
        <SurveyForm formData={formData} setFormData={setFormData} setAnswer={setAnswer} answers={answers}/>

      </section>
    </main>
  );
}

export default Survey;


