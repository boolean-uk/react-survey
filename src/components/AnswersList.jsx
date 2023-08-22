import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
    console.log("Inside AnswersList: ", props);

    const { answersList, onEditClick } = props;

    return (
        <ul>
            {answersList.map((answerItem, i) => (
                <AnswersItem
                    answerItem={answerItem}
                    key={i}
                    index={i}
                    onEditClick={onEditClick}
                />
            ))}
        </ul>
    );
}
