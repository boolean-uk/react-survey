import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);


  return (
    <ul>
      {props.answersList && props.answersList.map((answerItem, index) => (
        <AnswersItem
          key={index}
          answerItem={answerItem}
          setSubmissions={props.setSubmissions}
        />
      ))}
    </ul>
  );
}
