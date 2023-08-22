import { useState } from "react";
import AnswersItem from "./AnswersItem";

export default function AnswersList({ submittedAnswer }) {
  const [answersList, setAnswersList] = useState([])

  return (
    (answersList.length > 0) &&
      <ul>
        {
          answersList.map((answerItem, i) => (
            <AnswersItem answerItem={answerItem} key={i} />
          ))
        }
      </ul>
  );
}
