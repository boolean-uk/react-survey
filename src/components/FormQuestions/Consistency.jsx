export default function Consistency(props) {
    return (
        <div className="form__group radio">
            <h3>How do you rate the consistency of your rubber duck?</h3>
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={props.handleChange}
                  checked={props.userData.consistency === "1"}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={props.handleChange}
                  checked={props.userData.consistency === "2"}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={props.handleChange}
                  checked={props.userData.consistency === "3"}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={props.handleChange}
                  checked={props.userData.consistency === "4"}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
    )
}