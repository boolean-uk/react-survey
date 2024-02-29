// This is the main component being exported from this file
export default function AnswersItem({answer, setForm, form, index, setAnswers, answers}) {

  // map through answer.ratingTimeSpent and return a list item for each item
  const ItemsList = ({ list }) => {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };


  const handleEdit = () => {
    console.log(answer)
    setForm(answer)
  };
  
  const handleUpdateAnswer = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = form;
    setAnswers(updatedAnswers);
    setForm({
      ratingColor: "0",
      ratingTimeSpent: "",
      text: "",
      name: "",
      email: "",
    })
  };

  return (
    <li>
      <article className="answer">
        <h3>{answer.name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answer.ratingColor}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
          <ItemsList list={answer.ratingTimeSpent} />
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answer.text}</span>
        </p>
      </article>
      <button onClick={handleEdit}>SELECT</button>
      <button onClick={handleUpdateAnswer}>SUBMIT</button>
    </li>
  );
}
