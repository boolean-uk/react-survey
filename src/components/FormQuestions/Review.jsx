export default function Review(props) {
    return (
        <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={props.handleChange}
              value={props.userData.review}
            ></textarea>
          </label>
    )
}