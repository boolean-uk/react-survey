import AnswersItem from "./AnswersItem";
import PropTypes from 'prop-types'

export default function AnswersList(props) {

  const {answersList} = props
  // answersList.forEach(element => {
  //   console.log(element)
  // });
  

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
AnswersList.propTypes = {
  // Update prop type to match the destructure
  answersList: PropTypes.array
};