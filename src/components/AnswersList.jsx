import AnswersItem from "./AnswersItem";

export default function AnswersList(answers) {
  console.log("Inside AnswersList: ", answers);

  //const { answers } = props;

  return (
    <ul>
      {/* {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))} */}
      <AnswersItem answerItem={answers} />
    </ul>
  );
}
