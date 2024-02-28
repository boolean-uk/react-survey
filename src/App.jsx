import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Survey from "./components/Survey";


export default function App() {

    // const [answers, setAnswer] = useState([]);
  const [answers, setAnswer] = useState([
    {
    id:0,
    username: 'Kanthee k',
    colorRate:666,
    features:['111', '222'],
    timeSpent: ['xx', 'yy'],
    review: 'OMG, THIS FDUCK!',
    email:""
  }
]);


  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      {/* <AnswersList answersList={answers}/> */}
      <Survey answers={answers} setAnswer={setAnswer} />
    
    </>
  );
}
