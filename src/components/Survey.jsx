import { useCallback, useEffect, useState } from "react";
import Checkboxes from "./form/Checkboxes";
import RadioButtons from "./form/RadioButtons";
import AnswersList from "./AnswersList";

function Survey() {
    const initForm = {
        email: "",
        username: "",
        review: "",
        spentTime: [],
        color: "",
    };
    const initAnswers = [
        {
            email: "mail@mail.com",
            username: "Mailman",
            review: "I talk to my duck every day!",
            spentTime: ["chatting"],
            color: "4",
        },
        {
            email: "man@man.no",
            username: "Man",
            review: "Man likes duck.",
            spentTime: ["bathing", "chatting"],
            color: "3",
        },
    ];

    const initApiRequest = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    let apiInitAnswers;

    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = useState(false); //Ignore this state
    const [formData, setFormData] = useState({ ...initForm });
    const [answers, setAnswers] = useState([...initAnswers]);
    const [editIndex, setEditIndex] = useState(-1);

    const getInitData = useCallback(async () => {
        const response = await fetch(
            "http://localhost:3000/surveys",
            initApiRequest
        );
        apiInitAnswers = await response.json();
        console.log(apiInitAnswers);
        setAnswers([...apiInitAnswers]);
    }, [setAnswers]);

    useEffect(() => {
        getInitData();
    }, [getInitData]);

    const dataChanged = (event) => {
        const newData = { ...formData };
        newData[event.target.name] = event.target.value;
        setFormData(newData);
    };

    const submitSurvey = (event) => {
        event.preventDefault();
        console.log(formData);

        const apiPostRequest = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        const apiPutRequest = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        if (
            formData.email.trim() === "" ||
            formData.username.trim() === "" ||
            formData.review.trim() === "" ||
            formData.spentTime.length < 1 ||
            formData.color === ""
        ) {
            return;
        }
        if (editIndex === -1) {
            //setAnswers([...answers, { ...formData }]);s
            fetch("http://localhost:3000/surveys", apiPostRequest);
            getInitData();
        } else {
            const newAnswers = [...answers];
            newAnswers[editIndex] = { ...formData };
            fetch(
                "http://localhost:3000/surveys/" + answers[editIndex].id,
                apiPutRequest
            );
            getInitData();
            setEditIndex(-1);
        }

        setFormData({ ...initForm });
    };

    const deleteAnswer = async (event) => {
        const apiDelteRequest = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        await fetch(
            "http://localhost:3000/surveys/" + answers[event.target.id].id,
            apiDelteRequest
        );
        await getInitData();
        setEditIndex(-1);
        setFormData({ ...initForm });
    };

    const editAnswer = (event) => {
        const i = event.target.id;
        setEditIndex(i);
        setFormData({ ...answers[i] });
    };

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList
                    answersList={answers}
                    editAnswer={editAnswer}
                    deleteAnswer={deleteAnswer}
                />
            </section>
            <section className="survey__form">
                <form className="form" onSubmit={submitSurvey}>
                    <h2>Tell us what you think about your rubber duck!</h2>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck colour?</h3>
                        <RadioButtons
                            onChange={dataChanged}
                            color={formData.color}
                        />
                    </div>
                    <div className="form__group">
                        <h3>
                            How do you like to spend time with your rubber duck
                        </h3>
                        <ul>
                            <Checkboxes
                                setFormData={setFormData}
                                formData={formData}
                            />
                        </ul>
                    </div>
                    <label>
                        What else have you got to say about your rubber duck?
                        <textarea
                            name="review"
                            cols="30"
                            rows="10"
                            value={formData.review}
                            onChange={dataChanged}
                        ></textarea>
                    </label>
                    <label>
                        Put your name here (if you feel like it):
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={dataChanged}
                        />
                    </label>
                    <label>
                        Leave us your email pretty please??
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={dataChanged}
                        />
                    </label>
                    <input
                        className="form__submit"
                        type="submit"
                        value="Submit Survey!"
                    />
                </form>
            </section>
        </main>
    );
}

export default Survey;
