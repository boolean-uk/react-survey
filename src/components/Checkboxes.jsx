export default function Checkboxes({handleChange, formState}) {

    return (

        <ul>
            <li>
                <label>Swimming
                    <input
                        onChange={handleChange}
                        checked={formState.swimming.value}
                        name="activity"
                        type="checkbox"
                        value="swimming"
                    />
                </label>
            </li>
            <li>
                <label>Bathing
                    <input
                        onChange={handleChange}
                        checked={formState.bathing.value}
                        name="activity"
                        type="checkbox"
                        value="bathing"
                    />
                </label>
            </li>
            <li>
                <label>Chatting
                    <input
                        onChange={handleChange}
                        checked={formState.chatting.value}
                        name="activity"
                        type="checkbox"
                        value="chatting"
                    />
                </label>
            </li>
            <li>
                <label>I don't like to activity with it
                    <input
                    onChange={handleChange}
                    checked={formState.noTime.value}
                    name="activity"
                    type="checkbox"
                    value="noTime"
                    />
                </label>
            </li>
        </ul>
    )
}