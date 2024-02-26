import PropType from "prop-types";

import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, handleEdit }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          handleEdit={handleEdit}
          props={answersList}
        />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropType.array,
  handleEdit: PropType.func,
};
