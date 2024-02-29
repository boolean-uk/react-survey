function RadioInputList(props) {
    const radioElements = props.radioInputs.map(
        (radioInput) => (
            <li>
                <input
                    id={radioInput.id}
                    type="radio"
                    name={radioInput.color}
                    value={radioInput.value}
                    checked={radioInput.}
            </li>
        )
    )
}

export default RadioInputList