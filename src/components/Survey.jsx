import { useEffect, useState } from "react";

// components
import QuestionsForm from "./QuestionsForm";
import AnswersList from "./AnswersList";

const root = "http://localhost:3000/answers/";

function Survey() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [answers, setAnswers] = useState([]);
    const [editData, setEditData] = useState({});

    // fetches

    const postAnswer = (answer) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answer),
        };
        fetch(root, options).then(() => getAllAnswers());
    };

    const getAllAnswers = () => {
        fetch(root)
            .then((res) => res.json())
            .then((data) => setAnswers(data));
    };

    const updateAnswer = (answer) => {
        const options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...answer }),
        };

        fetch(root + answer.id, options).then(() => getAllAnswers());
    };

    // handlers

    const handleAnswers = (form) => postAnswer(form);

    const handleEditData = (data) => setEditData(data);

    const handleEditAnswers = (form) => {
        updateAnswer(form);
        setEditData({});
    };

    // useEffect
    useEffect(() => getAllAnswers(), []);

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
