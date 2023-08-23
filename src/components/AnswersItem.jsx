// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

function ItemsList({ list }) {
    return (
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    );
}

// This is the main component being exported from this file
export default function AnswersItem({
    // Feel free to change this props names to what suits you best
    // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
    answerItem: {
        name,
        colorRating,
        spendingTime,
        review,
        id,
        bestFeatures,
        worstFeatures,
        consistencyRating,
        logoRating,
    },
    index,
    onEditClick,
    onDeleteClick,
}) {
    if (!colorRating) {
        // colorRating is the only field I made 'required', so this will always be truthy once the answerItem is loaded.
        return <div>Loading...</div>;
    }

    return (
        <li key={index}>
            <article className="answer">
                <h3>{name || "Anon"} said:</h3>
                <p>
                    <em>
                        What would you say are the best features of your rubber
                        duck?
                    </em>
                    <ItemsList list={bestFeatures} />
                </p>
                <p>
                    <em>
                        What would you say are the worst bits of your rubber
                        duck?
                    </em>
                    <ItemsList list={worstFeatures} />
                </p>
                <p>
                    <em>How do you rate your rubber duck consistency?</em>
                    <span className="answer__line">{consistencyRating}</span>
                </p>
                <p>
                    <em>How do you rate your rubber duck colour?</em>
                    <span className="answer__line">{colorRating}</span>
                </p>
                <p>
                    <em>How do you rate your rubber duck logo?</em>
                    <span className="answer__line">{logoRating}</span>
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
                <div class="button-container">
                    <button 
                        class="edit-button" 
                        onClick={() => onEditClick(id)}
                    >
                        Edit
                    </button>
                    <button
                        class="delete-button"
                        onClick={() => onDeleteClick(id)}
                    >
                        Delete
                    </button>
                </div>
            </article>
        </li>
    );
}
