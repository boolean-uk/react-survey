const activities = [
  { value: 'swimming', label: 'Swimming' },
  { value: 'bathing', label: 'Bathing' },
  { value: 'chatting', label: 'Chatting' },
  { value: 'noTime', label: "I don't like to spend time with it" },
];

function Checkboxes({ handleChange, timeSpent }) {
  return (
    <ul>
      {activities.map(activity => (
        <li key={activity.value}>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value={activity.value}
              onChange={handleChange}
              checked={timeSpent.includes(activity.value)}
            />
            {activity.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default Checkboxes;
