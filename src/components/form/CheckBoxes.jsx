

const CheckBoxes = (props) => {

    const {handleChange, state} = props ?? {}

    return (
        <ul>
            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={state.timeSpent["swimming"]}
                    onChange={handleChange}
                />Swimming
                </label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="bathing" onChange={handleChange} checked={state.timeSpent["bathing"]}/>Bathing</label>
            </li>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={state.timeSpent["chatting"]}
                    onChange={handleChange}
                />Chatting</label>
            </li>
            <li>
                <label
                ><input name="spend-time" type="checkbox" value="noTime" onChange={handleChange} checked={state.timeSpent["noTime"]}/>I don't like to
                spend time with it</label>
            </li>
        </ul>
    )

}

export default CheckBoxes;