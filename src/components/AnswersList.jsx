import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
  //console.log("Inside AnswersList: ", props);

  const { answerData } = props;
  //console.log("Inside AnswersList 2: ", answerData);

  return (
    <ul>
      {answerData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}