export default function SpendTime(props) {
    return (
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time-swimming"
                    type="checkbox"
                    value="swimming"
                    onChange={props.handleChange}
                    checked={props.userData.spendTime.swimming}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-bathing"
                    type="checkbox"
                    value="bathing"
                    onChange={props.handleChange}
                    checked={props.userData.spendTime.bathing}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-chatting"
                    type="checkbox"
                    value="chatting"
                    onChange={props.handleChange}
                    checked={props.userData.spendTime.chatting}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-noTime"
                    type="checkbox"
                    value="noTime"
                    onChange={props.handleChange}
                    checked={props.userData.spendTime.noTime}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
    )
}