// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
    console.log(list);
    return (
        <ul>
            {list.map((item) => (
                <li>{answersSet[item.toLowerCase()]}</li>
            ))}
        </ul>
    );
}

// This is the main component being exported from this file
export default function AnswersItem({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    answerItem: { name, colorRating, spendingTime, review },
    index, 
    onEditClick,
}) {
    return (
        <li key={index}>
            <article className="answer">
                <h3>{name || "Anon"} said:</h3>
                <p>
                    <em>How do you rate your rubber duck colour?</em>
                    <span className="answer__line">{colorRating}</span>
                </p>
                <p>
                    <em>
                        How do you like to spend time with your rubber duck?
                    </em>
                    <ItemsList list={spendingTime} />
                </p>
                <p>
                    <em>
                        What else have you got to say about your rubber duck?
                    </em>
                    <span className="answer__line">{review}</span>
                </p>
                <button onClick={() => onEditClick(index)}>Edit</button>
            </article>
        </li>
    );
}
