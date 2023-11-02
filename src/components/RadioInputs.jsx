const RadioInputs = ({ handleChange, name, questions }) => {
    return (
        <ul onChange={(e) => handleChange(e)}>
            {questions.map((question, index) => (
                <li key={index}>
                    <input
                        id={question.id}
                        type="radio"
                        name={name}
                        value={question.value}
                    />
                    <label htmlFor={question.id}>{question.value}</label>
                </li>
            ))}
        </ul>
    );
};

export default RadioInputs;
