import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList, setForm } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} setForm={setForm} key={i} />
      ))}
    </ul>
  );
}
