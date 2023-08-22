import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  // console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} index={i} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
      ))}
    </ul>
  );
}
