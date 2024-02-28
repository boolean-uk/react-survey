export default function AnswersList(props) {
  const { answersList } = props;

  return (
    <>
      {answersList.map((val => (
        <span key={val} className="answer__line">{val}</span>
      )))}
    </>
  );
}
