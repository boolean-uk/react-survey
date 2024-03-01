export default function Username(props) {
    return (
        <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={props.handleChange}
              value={props.userData.username}
            />
          </label>
    )
}