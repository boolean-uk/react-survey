import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList, setFormData } = props;

  return (
    <ul>
      {answersList.length !== 0 ? answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} setFormData={setFormData}/>
      )) : null}
    </ul>
  );
}
