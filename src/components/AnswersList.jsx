import PropTypes from "prop-types"
import AnswersItem from "./AnswersItem";

export default function AnswerListComponent({answerList}) {
  //console.log("Inside AnswersList: ", answerList)

  return (
    <ul>
      {answerList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  )
}

AnswerListComponent.propTypes = {
  answerList: PropTypes.array.isRequired,
}
