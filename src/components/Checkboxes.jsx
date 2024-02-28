/* eslint-disable react/prop-types */
function Checkboxes(props) {
  return (
    <div className="form__group">
    <h3>How do you like to spend time with your rubber duck?</h3>
    <ul>
        <li>
            <label>
                <input 
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={props.onChange}
                    checked={props.userData.timeSpent.includes("swimming")}/>
                Swimming
            </label>
        </li>
        <li>
            <label>
                <input 
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={props.onChange}
                    checked={props.userData.timeSpent.includes("bathing")}/>
                Bathing
            </label>
        </li>
        <li>
            <label>
                <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={props.onChange}
                    checked={props.userData.timeSpent.includes("chatting")}/>
                Chatting
            </label>
        </li>
        <li>
            <label>
                <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={props.onChange}
                    checked={props.userData.timeSpent.includes("noTime")}/>
                I don&apos;t like to spend time with it
            </label>
        </li>
    </ul>
    </div>
  )
}

export default Checkboxes
