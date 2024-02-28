function RadioButtonsComponent({ survey, setSurvey }) {

    function ColorRatingChanged(e) {
        setSurvey({
            ...survey,
            colorRating: Number(e.target.value)
        })
    }

    return (
        <ul>
            <li>
                <input
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                    onChange={ColorRatingChanged}
                    checked={survey.colorRating === 1} />
                <label htmlFor="color-one">
                    1
                </label>
            </li>
            <li>
                <input
                    id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                    onChange={ColorRatingChanged}
                    checked={survey.colorRating === 2} />
                <label htmlFor="color-two">
                    2
                </label>
            </li>
            <li>
                <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                    onChange={ColorRatingChanged}
                    checked={survey.colorRating === 3} />
                <label htmlFor="color-three">
                    3
                </label>
            </li>
            <li>
                <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                    onChange={ColorRatingChanged}
                    checked={survey.colorRating === 4} />
                <label htmlFor="color-four">
                    4
                </label>
            </li>
        </ul>
    )
}

export default RadioButtonsComponent