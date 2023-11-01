import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {


  const {answersList, setForm, setAnswersList} = props;
  
  return (
    <ul>
      {answersList.map((answerItem, index) => {
        console.log(index)
        return (
        <AnswersItem 
          answerItem={answerItem} 
          setForm={setForm} 
          setAnswersList={setAnswersList} 
          answersList={answersList} 
          key={index} />
        )
      }
    )}
    </ul>
  );
}
