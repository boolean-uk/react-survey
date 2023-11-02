function ItemsList({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default function AnswersItem({ answerItem, handleEditData }) {
    return (
        <li className="answerItem">
            <article className="answer">
                <button
                    className="editButton"
                    onClick={() => handleEditData(answerItem)}
                >
                    Edit
                </button>
                <h3>{answerItem.username || "Anon"} said:</h3>
                <p>
                    <em>How do you rate your rubber duck color?</em>
                    <span className="answer__line">{answerItem.color}</span>
                </p>
                <span>
                    <em>
                        How do you like to spend time with your rubber duck?
                    </em>
                    <ItemsList list={answerItem.timeSpent} />
                </span>
                <p>
                    <em>
                        What else have you got to say about your rubber duck?
                    </em>
                    <span className="answer__line">{answerItem.review}</span>
                </p>
            </article>
        </li>
    );
}
