function RadioChoice(props) {
    const { data, handleChange, name } = props;
    const options = ["1", "2", "3", "4"];

    return (
        <ul>
            {options.map((optionValue, index) => (
                <li key={index}>
                    <input
                        id={`${name}-${optionValue}`}
                        type="radio"
                        name={name}
                        value={optionValue}
                        checked={data[name] === optionValue}
                        onChange={handleChange}
                        required={name === "colorRating"}
                    />
                    <label htmlFor={`${name}-${optionValue}`}>
                        {optionValue}
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default RadioChoice;
