function Checkboxes(properties) {

    const handleCheckboxChange = (event) => {
        const { value } = event.target;
        const newTimeSpent = properties.userData.timeSpent.includes(value)
          ? properties.userData.timeSpent.filter((e) => e !== value)
          : [...properties.userData.timeSpent, value];
        properties.setUserData({ ...properties.userData, timeSpent: newTimeSpent });
      };

    return (
    <ul>
        <li>
            <label
            ><input
                name="spend-time"
                type="checkbox"
                value="swimming"
                checked={properties.userData.timeSpent.includes("swimming")}
                onChange={handleCheckboxChange}
            />
            Swimming
            </label>
        </li>
        <li>
            <label
            ><input 
            name="spend-time" 
            type="checkbox"
            value="bathing"
            checked={properties.userData.timeSpent.includes('bathing')}
            onChange={handleCheckboxChange} />
            Bathing
            </label>
        </li>
        <li>
            <label
            ><input
                name="spend-time"
                type="checkbox"
                value="chatting"
                checked={properties.userData.timeSpent.includes('chatting')}
                onChange={handleCheckboxChange}
            />
            Chatting
            </label>
        </li>
        <li>
            <label
            ><input 
            name="spend-time" 
            type="checkbox"
            value="noTime"
            checked={properties.userData.timeSpent.includes('noTime')}
            onChange={handleCheckboxChange}
             />
            I do not like to spend time with it
            </label>
        </li>
    </ul>
    )
}
export default Checkboxes