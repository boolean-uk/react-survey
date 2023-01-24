import AnswersItem from "./AnswersItem";
import {useState} from 'react'

export default function AnswersList({answersList}) { 
    // console.log("This is the answers List", answersList)

  return (
    <ul>
      {answersList.map((answerItem, i) => {
        return <AnswersItem 
        answerItem={answerItem} 
        i={i}
        />
      })}
    </ul>
  );
}
