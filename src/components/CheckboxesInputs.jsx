const CheckboxesInputs = ({ handleChange, name, questions, inputs }) => {
    return (
        <ul>
            {questions.map((question, index) => (
                <li key={index}>
                    <label>
                        <input
                            name={name}
                            type="checkbox"
                            value={question.value}
                            checked={
                                inputs[name] &&
                                inputs[name].includes(question.value)
                                    ? true
                                    : false
                            }
                            onChange={(e) => handleChange(e)}
                        />
                        {question.value}
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default CheckboxesInputs;
