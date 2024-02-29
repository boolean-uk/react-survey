import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, setForm, form, setAnswers}) {
  console.log("Inside AnswersList: ", answers);



  return (
    <ul>
      {answers.map((answer, index) => (
        <AnswersItem key={index} index={index} answer={answer} setForm={setForm} form={form} setAnswers={setAnswers} answers={answers}/>
      ))}
    </ul>
  );
}
