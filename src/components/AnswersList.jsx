import AnswersItem from "./AnswersItem";


export default function AnswersList(props) {
  
  console.log("Inside AnswersList: ", props.submittedForms);

  return (
    <ul>
      {props.submittedForms.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} i={i} setIsEdited={props.setIsEdited}  />
      ))}
    </ul>
  );
}
