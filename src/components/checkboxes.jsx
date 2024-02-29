import PropTypes from 'prop-types'
export default function CheckBoxes({ answer, setAnswer }) {

    const handleEvent = (event) => {
        setAnswer(prevState => {
            const spendTime = prevState.spendTime;
            const valueIndex = spendTime.indexOf(event.target.value);

            if (valueIndex === -1)
            {
                return {
                    ...prevState,
                    spendTime: [...spendTime, event.target.value],
                };
            } else
            {
                return {
                    ...prevState,
                    spendTime: [...spendTime.slice(0, valueIndex), ...spendTime.slice(valueIndex + 1)],
                };
            }
        });
    };


    return (
        <ul>
            <li>
                <label>
                    <input
                        name="spendTime"
                        type="checkbox"
                        value="swimming"
                        checked={answer.spendTime.includes("swimming")}
                        onChange={handleEvent}
                    />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spendTime"
                        type="checkbox"
                        value="bathing"
                        checked={answer.spendTime.includes("bathing")}
                        onChange={handleEvent}
                    />
                    Bathing
                </label>
            </li>
            <li>
                <label
                ><input
                        name="spendTime"
                        type="checkbox"
                        value="chatting"
                        checked={answer.spendTime.includes("chatting")}
                        onChange={handleEvent}
                    />Chatting</label
                >
            </li>
            <li>
                <label>
                    <input
                        name="spendTime"
                        type="checkbox"
                        value="noTime"
                        checked={answer.spendTime.includes("noTime")}
                        onChange={handleEvent}
                    />
                    I don&apos;t like to spend time with it
                </label>
            </li>
        </ul>
    )
}

CheckBoxes.propTypes = {
    answer:
        PropTypes.shape(
            {
                username: PropTypes.string,
                colour: PropTypes.string,
                spendTime: PropTypes.arrayOf(PropTypes.string),
                review: PropTypes.string,
            }
        ),
    setAnswer: PropTypes.func
}