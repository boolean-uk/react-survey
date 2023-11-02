const RadioInputs = ({ handleChange, name, questions, inputs }) => {
    return (
        <ul>
            {questions.map((question, index) => (
                <li key={index}>
                    <input
                        id={question.id}
                        type="radio"
                        name={name}
                        value={question.value}
                        checked={
                            inputs[name] === question.value.toString()
                                ? true
                                : false
                        }
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor={question.id}>{question.value}</label>
                </li>
            ))}
        </ul>
    );
};

export default RadioInputs;
