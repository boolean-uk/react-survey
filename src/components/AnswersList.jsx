import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, setState, setAnswersList } = props ?? {};

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} index={i} setState={setState} answersList={answersList} setAnswersList={setAnswersList}/>
      ))}
    </ul>
  );
}
