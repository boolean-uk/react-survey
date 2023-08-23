import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  // console.log("Inside AnswersList: ", props);

  const { formDataList } = props;

  // console.log("After AnswersList: ", formDataList);

  return (
    <ul>
      {formDataList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
