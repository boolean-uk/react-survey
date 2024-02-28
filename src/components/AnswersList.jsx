import PropTypes from 'prop-types'
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} 
        setEdit={() => props.setEdit(i)} setDelete={() => props.delete(answerItem)} />
      ))}
    </ul>
  );
}