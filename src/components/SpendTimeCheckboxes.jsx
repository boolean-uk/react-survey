function SpendTimeCheckboxes({ form, handleChange}) {

    return (
        <ul>
        <li>
          <label>
            <input
                onChange={e => handleChange(e)}
                name="spendTime"
                type="checkbox"
                value="swimming"
                checked={form.spendTime === "swimming"}
            />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input
                onChange={e => handleChange(e)}
                name="spendTime"
                type="checkbox"
                value="bathing"
                checked={form.spendTime === "bathing"}
            />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input
                onChange={e => handleChange(e)}
                name="spendTime"
                type="checkbox"
                value="chatting"
                checked={form.spendTime === "chatting"}
            />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input
                onChange={e => handleChange(e)}
                name="spendTime"
                type="checkbox"
                value="noTime"
                checked={form.spendTime === "noTime"}
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    )
}

export default SpendTimeCheckboxes