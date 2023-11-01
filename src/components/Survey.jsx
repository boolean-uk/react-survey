import { useState } from "react";

// components
import QuestionsForm from "./QuestionsForm";
import AnswersList from "./AnswersList";

function Survey() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [answers, setAnswers] = useState([]);

    const handleAnswers = (form) => {
        setAnswers([...answers, form]);
    };

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={answers} />
            </section>
            <section className="survey__form">
                <QuestionsForm handleAnswers={handleAnswers} />
            </section>
        </main>
    );
}

export default Survey;
