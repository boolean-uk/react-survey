const CheckboxesInputs = ({ handleChange }) => {
    return (
        <ul onChange={(e) => handleChange(e)}>
            <li>
                <label>
                    <input name="timeSpent" type="checkbox" value="swimming" />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input name="timeSpent" type="checkbox" value="bathing" />
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input name="timeSpent" type="checkbox" value="chatting" />
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input name="timeSpent" type="checkbox" value="noTime" />I
                    don't like to spend time with it
                </label>
            </li>
        </ul>
    );
};

export default CheckboxesInputs;
