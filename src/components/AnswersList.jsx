import AnswersItem from "./AnswersItem";

function AnswersList({savedForms, loadForm}) {

  // console.log("Inside AnswersList: ", savedForms);

  // const { answersList } = savedForms;

  return (
    <ul>
      {savedForms.map((savedForms, i) => (
        <AnswersItem savedForms={savedForms} key={i} index={i} loadForm={loadForm} />
        
      ))}
    </ul>
  );
}

export default AnswersList
