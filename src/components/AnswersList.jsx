import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  //const { userDataArray } = props;
  
  console.log("The Array: ", props.userDataArray)

  return (
    <ul>
      {props.userDataArray.map((userData, i) => (
        
        <AnswersItem answerItem={userData} key={i} onEdit={(editedData) => props.onEdit(editedData, i)}/>
       
        
        
      ))}
    </ul>
  );
}