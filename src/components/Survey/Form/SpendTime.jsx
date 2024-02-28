function SpendTimeComponent({ survey, setSurvey }) {

    function updateSpendTime(e) {
        if (e.target.checked) {
            setSurvey({
                ...survey,
                spendingTime: [...survey.spendingTime, e.target.value],
            })
        } else {
            let arr = [...survey.spendingTime]
            arr.splice(arr.indexOf(e.target.value), 1)
            setSurvey({
                ...survey,
                spendingTime: arr
            })
        }
    }

    return (
        <ul>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                        onChange={updateSpendTime}
                        checked={survey.spendingTime.includes("swimming")} />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="bathing"
                        onChange={updateSpendTime}
                        checked={survey.spendingTime.includes("bathing")} />
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="chatting"
                        onChange={updateSpendTime}
                        checked={survey.spendingTime.includes("chatting")} />
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="noTime"
                        onChange={updateSpendTime}
                        checked={survey.spendingTime.includes("noTime")} />
                    I don't like to spend time with it
                </label>
            </li>
        </ul>
    )
}

export default SpendTimeComponent