import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { userDataArray } = props;

  //console.log("The Array: ", userDataArray)

  return (
    <ul>
      {userDataArray.map((userData, i) => (
        <AnswersItem answerItem={userData} key={i} />
      ))}
    </ul>
  );
}