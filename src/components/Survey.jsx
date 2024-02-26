import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import SurveyForm from "./SurveyForm";

// const dummyData = {
//   id: 1,
//   username: "mock-username",
//   colour: "1",
//   timeSpent: ["swimming", "bathing", "noTime"],
//   review: "mock-review",
// };
const INITIAL_FORM_DATA = {
  username: "",
  colour: null,
  timeSpent: [],
  review: "",
};
function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  function handleSubmit(surveyAnswerData) {
    if (Object.prototype.hasOwnProperty.call(surveyAnswerData, "id")) {
      // updateSurveyEntry(surveyAnswerData);

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(surveyAnswerData),
      };
      fetch(
        "http://localhost:3000/responses/" + surveyAnswerData.id,
        requestOptions
      )
        .then((response) => response.json())
        .then(() => {
          fetchSurveyResponses();
        });
    } else {
      // addNewSurveyEntry(surveyAnswerData);

      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveyAnswerData),
      };

      fetch("http://localhost:3000/responses", fetchOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok, status: ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .then(() => {
          fetchSurveyResponses();
        });
    }
  }

  function deleteItem(surveyAnswerData) {
    // updateSurveyEntry(surveyAnswerData);
    fetch("http://localhost:3000/responses/" + surveyAnswerData.id, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .then(() => {
        fetchSurveyResponses();
      });
  }
  function addNewSurveyEntry(surveyAnswerData) {
    const id = surveyAnswers.length + 1;
    setSurveyAnswers([{ ...surveyAnswerData, id: id }, ...surveyAnswers]);
  }
  function updateSurveyEntry(surveyAnswerData) {
    const updatedSurveyAnswers = surveyAnswers.map((e) => {
      if (e.id === surveyAnswerData.id) {
        return { ...surveyAnswerData };
      } else {
        return e;
      }
    });
    setSurveyAnswers(updatedSurveyAnswers);
  }

  useEffect(() => {
    fetchSurveyResponses();
  }, []);

  const fetchSurveyResponses = () => {
    fetch("http://localhost:3000/responses")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSurveyAnswers(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={surveyAnswers}
          setFormData={setFormData}
          deleteItem={deleteItem}
        />
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <SurveyForm
          addNewSurveyEntry={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          INITIAL_FORM_DATA={INITIAL_FORM_DATA}
        />
      </section>
    </main>
  );
}

export default Survey;
