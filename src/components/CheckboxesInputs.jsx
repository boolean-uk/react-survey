const CheckboxesInputs = ({ handleChange, name, questions }) => {
    return (
        <ul onChange={(e) => handleChange(e)}>
            {questions.map((question, index) => (
                <li key={index}>
                    <label>
                        <input
                            name={name}
                            type="checkbox"
                            value={question.value}
                        />
                        {question.value}
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default CheckboxesInputs;
