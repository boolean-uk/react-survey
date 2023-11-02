import { useState } from "react";

// components
import QuestionsForm from "./QuestionsForm";
import AnswersList from "./AnswersList";

function Survey() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [answers, setAnswers] = useState([]);
    const [editData, setEditData] = useState({});

    const handleAnswers = (form) => {
        setAnswers([...answers, form]);
    };

    const handleEditData = (data) => {
        setEditData(data);
    };

    const handleEditAnswers = (form) => {
        setAnswers(
            answers.map((item) => (item.id === form.id ? { ...form } : item))
        );
        setEditData({});
    };

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList
                    answersList={answers}
                    handleEditData={handleEditData}
                />
            </section>
            <section className="survey__form">
                <QuestionsForm
                    handleAnswers={handleAnswers}
                    editData={editData}
                    handleEditAnswers={handleEditAnswers}
                />
            </section>
        </main>
    );
}

export default Survey;
