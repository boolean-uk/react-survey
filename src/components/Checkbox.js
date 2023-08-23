function Checkbox(props) {
    const { data, formData, handleChange, name } = props;
    return (
        <ul>
            {data.map((option) => (
                <li>
                    <label>
                        <input
                            name={name}
                            type="checkbox"
                            value={option}
                            checked={formData[name].includes(option)}
                            onChange={handleChange}
                            
                        />
                        {option}
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default Checkbox;
