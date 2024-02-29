import AnswersItem from "./AnswersItem";

export default function AnswersList(properties) {
  return (
    <ul>
      {properties.forms.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} editCallback={properties.editCallback} />
      ))}
    </ul>
  );
}
