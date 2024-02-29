export default function Email(props) {
    return (
        <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={props.handleChange}
              value={props.userData.email}
            />
          </label>
    )
}