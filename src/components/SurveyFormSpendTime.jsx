/* eslint-disable react/prop-types */

function SurveyFormSpendTime({ formData, setFormData }) {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    const copyTimeSpent = [...formData.timeSpent];
    if (checked) {
      copyTimeSpent.push(value);
    }
    if (!checked) {
      copyTimeSpent.splice(copyTimeSpent.indexOf(value), 1);
    }
    // console.log(checkedItems);
    setFormData({ ...formData, timeSpent: copyTimeSpent });
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={formData.timeSpent.includes("swimming")}
            onChange={handleChange}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            checked={formData.timeSpent.includes("bathing")}
            onChange={handleChange}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            checked={formData.timeSpent.includes("chatting")}
            onChange={handleChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            checked={formData.timeSpent.includes("noTime")}
            onChange={handleChange}
          />
          I don&apos;t like to spend time with it
        </label>
      </li>
    </ul>
  );
}
export default SurveyFormSpendTime;
