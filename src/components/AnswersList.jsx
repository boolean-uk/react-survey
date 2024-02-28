import AnswersItem from "./AnswersItem";

function AnswersList({savedForms}) {

  // console.log("Inside AnswersList: ", savedForms);

  // const { answersList } = savedForms;

  return (
    <ul>
      {savedForms.map((savedForms, i) => (
        <AnswersItem savedForms={savedForms} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList
