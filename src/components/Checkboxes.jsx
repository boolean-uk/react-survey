export default function Checkboxes() {

    return (

        <ul>
            <li>
                <label>Swimming
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="swimming"
                    />
                </label>
            </li>
            <li>
                <label>Bathing
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="bathing"
                    />
                </label>
            </li>
            <li>
                <label>Chatting
                    <input
                        name="spend-time"
                        type="checkbox"
                        value="chatting"
                    />
                </label>
            </li>
            <li>
                <label>I don't like to spend time with it
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    />
                </label>
            </li>
        </ul>
    )
}