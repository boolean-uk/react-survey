import PropTypes from "prop-types";

function AnswersList({ answersList }) {
  console.log("AnswersList:", answersList);

  // Check if answersList is empty
  if (Object.keys(answersList).length === 0) {
    return <p>No answers submitted yet.</p>;
  }

  // Create an array to store unique usernames
  const uniqueUsernames = [];

  return (
    <ul>
      {/* Iterate over the keys of the answersList object */}
      {Object.keys(answersList).map((key) => {
        // Check if the username is unique
        if (!uniqueUsernames.includes(answersList[key].username)) {
          // Add the username to the array of unique usernames
          uniqueUsernames.push(answersList[key].username);
          return (
            <li key={key}>
              {/* Render username or 'Anon' */}
              <h3>{answersList[key].username || "Anon"} said:</h3>
              {/* Render color answer */}
              <p>
                <em>How do you rate your rubber duck colour?</em>
                <span className="answer__line">{answersList[key].colour}</span>
              </p>
              {/* Render spend time answer */}
              <p>
                <em>How do you like to spend time with your rubber duck?</em>
                {/* Check if spendTime is an array */}
                {Array.isArray(answersList[key].spendTime) ? (
                  <ul>
                    {/* Iterate over spendTime array */}
                    {answersList[key].spendTime.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="answer__line">
                    {answersList[key].spendTime}
                  </span>
                )}
              </p>
              {/* Render spend time answer */}
              <p>
                <em>What else have you got to say about your rubber duck?</em>
                <span className="answer__line">{answersList[key].review}</span>
              </p>
            </li>
          );
        } else {
          return null; // Skip rendering if the username is not unique
        }
      })}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.object.isRequired,
};

export default AnswersList;
