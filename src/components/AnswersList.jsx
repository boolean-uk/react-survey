import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  return (
    <ul>
      {props.answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          index={i}
          setFormData={props.setFormData}
          setIsEditing={props.setIsEditing}
          setEditingIndex={props.setEditingIndex}
        />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array,
  setFormData: PropTypes.func,
  setIsEditing: PropTypes.func,
  setEditingIndex: PropTypes.func,
};
