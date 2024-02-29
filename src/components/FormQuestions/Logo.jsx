export default function Logo(props) {
    return (
        <div className="form__group radio">
            <h3>How do you rate the logo of your rubber duck?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={props.handleChange}
                  checked={props.userData.logo === "1"}
                />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  onChange={props.handleChange}
                  checked={props.userData.logo === "2"}
                />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  onChange={props.handleChange}
                  checked={props.userData.logo === "3"}
                />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  onChange={props.handleChange}
                  checked={props.userData.logo === "4"}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
    )
}