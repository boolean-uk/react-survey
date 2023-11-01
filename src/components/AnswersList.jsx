import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList }) {
    // console.log(answersList);

    return (
        <ul>
            {answersList.map((answerItem, i) => (
                <AnswersItem answerItem={answerItem} key={i} />
            ))}
        </ul>
    );
}
