import AnswersItemComponent from "./AnswersItem";

export default function AnswersListComponent(props) {
  console.log("Inside AnswersList: ", props);

  const { surveys, setSelected, setSurvey } = props;

  return (
    <ul>
      {surveys.map((survey, i) => (
        <AnswersItemComponent survey={survey} key={i} setSurvey={setSurvey}/>
      ))}
    </ul>
  );
}
