export default function BestFeatures(props) {
    return (
        <div className="form__group">
            <h3>What are the best features of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="bestFeatures-yellow"
                    type="checkbox"
                    value="yellow"
                    onChange={props.handleChange}
                    checked={props.userData.bestFeatures.yellow}
                  />
                  It is yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures-squeaks"
                    type="checkbox"
                    value="squeaks"
                    onChange={props.handleChange}
                    checked={props.userData.bestFeatures.squeaks}
                  />
                  It squeaks when sat on!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures-logo"
                    type="checkbox"
                    value="logo"
                    onChange={props.handleChange}
                    checked={props.userData.bestFeatures.logo}
                  />
                  It has an Apple logo
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="bestFeatures-big"
                    type="checkbox"
                    value="big"
                    onChange={props.handleChange}
                    checked={props.userData.bestFeatures.big}
                  />
                  It is too big to be sat on
                </label>
              </li>
            </ul>
          </div>
    )
}