import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
	console.log("Inside AnswersList: ", props);

	const { answersList, setFormData } = props;

	return (
		<ul>
			{answersList.map((answerItem, i) => (
				<AnswersItem
					answerItem={answerItem}
					setFormData={setFormData}
					key={i}
				/>
			))}
		</ul>
	);
}

AnswersList.propTypes = {
	answersList: PropTypes.array,
	setFormData: PropTypes.func,
};
