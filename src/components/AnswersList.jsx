import AnswersItem from "./AnswersItem"

export default function AnswersList({ answersList, setForm}) {

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} setForm={setForm} key={i} />
      ))}
    </ul>
  )
}
