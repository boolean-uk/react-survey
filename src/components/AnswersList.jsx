import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList({
	answersList,
	setFormData,
	deleteAnswer,
}) {
	// console.log("Inside AnswersList: ", answersList);

	return (
		<ul>
			{answersList.map((answerItem) => {
				return (
					<AnswersItem
						key={answerItem.id}
						answerItem={answerItem}
						setFormData={setFormData}
						deleteAnswer={deleteAnswer}
					/>
				);
			})}
		</ul>
	);
}

AnswersList.propTypes = {
	answersList: PropTypes.array,
	setFormData: PropTypes.func,
	deleteAnswer: PropTypes.func,
};
