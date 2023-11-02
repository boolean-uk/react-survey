import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, handleEditData }) {
    return (
        <ul>
            {answersList.map((answerItem, i) => (
                <AnswersItem
                    answerItem={answerItem}
                    key={i}
                    handleEditData={handleEditData}
                />
            ))}
        </ul>
    );
}
