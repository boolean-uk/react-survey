import AnswersItem from "./AnswersItem";
export default function AnswersList(props) {
	console.log("Inside AnswersList: ", props);

	const { answersList } = props;
	const { edit } = props;
	const { remove } = props;

	return (
		<ul>
			{answersList.map((answerItem, i) => (
				<AnswersItem
					answerItem={answerItem}
					index={i}
					edit={edit}
					remove={remove}
					key={i}
				/>
			))}
		</ul>
	);
}
