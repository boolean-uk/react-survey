// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import { useState } from "react";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index ) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  
  answerItem: {key, email, id, username, colour, timeSpent, review}, changeAnswer, deleteAnswer, submitted
}) {
  


  const edit = (e)=>{
    changeAnswer(e)
    
    SetActive()
  }

const SetActive =()=>{
  let activeArticle = document.querySelector('.active')
  if(activeArticle != null){
    activeArticle.classList = 'answer';
  }
    let article = document.getElementById(id)
    article.classList = 'answer active'
}

if(submitted === false){
    let article = document.querySelector('.active')
    if(article != null){ article.classList = 'answer'} 
   }
  

  return (
    <li key={key} >
      <article id={id} className={'answer'}>
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <div>
          <p><em>How do you like to spend time with your rubber duck?</em></p>
          <ItemsList list={timeSpent} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button className='answer-btn' onClick={e =>edit(e)}>Edit</button>
        <button className='answer-btn' onClick={e =>deleteAnswer(e)}>Delete</button>
      </article>
      
    </li>
  );
}
