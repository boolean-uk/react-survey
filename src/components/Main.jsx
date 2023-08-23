import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import RadioChoice from "./RadioChoice";
import AnswersList from "./AnswersList";

function Main() {
    const [open, setOpen] = useState(false); //Ignore this state

    const initialState = {
        bestFeatures: [],
        worstFeatures: [],
        consistencyRating: "",
        colorRating: "",
        logoRating: "",
        spendingTime: [],
        review: "",
        name: "",
        email: "",
    };

    const featuresArr = [
        "It's yellow",
        "It squeaks",
        "It has a logo",
        "It's big",
    ];

    const spendingTimeOptionsArr = [
        "Swimming",
        "Bathing",
        "Chatting",
        "I don't like spending time with it",
    ];

    const API_BASE_URL = "http://localhost:5000";

    const [formData, setFormData] = useState(initialState);
    const [results, setResults] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [colorRatingError, setColorRatingError] = useState(false);

    useEffect(() => {
        fetch(`${API_BASE_URL}/answers/`)
            .then((response) => response.json())
            .then((data) => setResults(data));
    }, [results]);

    const featuresData = {
        data: featuresArr,
        formData: formData,
    };

    const spendingTimeData = {
        data: spendingTimeOptionsArr,
        formData: formData,
    };

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: formData[name].includes(value)
                    ? formData[name].filter((item) => item !== value) // checkbox unchecked
                    : [...formData[name], value], // checkbox checked
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.colorRating) {
            setColorRatingError(true);
            return;
        } else {
            setColorRatingError(false);
        }
        if (editingIndex !== null) {
            updateAnswer(editingIndex, formData);
        } else {
            createAnswer(formData);
        }
        if (editingIndex === null) {
            setFormData(initialState);
        }
    };

    const createAnswer = (answerData) => {
        fetch(`${API_BASE_URL}/answers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answerData),
        }).then((newResult) => {
            setResults([...results, newResult]);
        });
    };

    const updateAnswer = (id, answerData) =>
        fetch(`${API_BASE_URL}/answers/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answerData),
        }).then(() => {
            const updatedAnswers = results.map(
                (r) => (r.id = id ? answerData : r)
            );
            setResults(updatedAnswers);
            setFormData(initialState);
            setEditingIndex(null);
        });

    const handleEditClick = (id) => {
        setEditingIndex(id);
        const editedAnswer = results.find((r) => r.id === id);
        setFormData(editedAnswer);
    };

    const deleteAnswer = (id) =>
        fetch(`${API_BASE_URL}/answers/${id}`, {
            method: "DELETE",
        }).then(() => {
            const updatedResults = results.filter((r) => r.id != id);
            setResults(updatedResults);
        });

    const handleDeleteClick = (id) => {
        deleteAnswer(id);
    };

    return (
        <main className="main">
            <section className={`main__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList
                    answersList={results}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                />
            </section>
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit} noValidate>
                    <h2>Tell us what you think about your rubber duck!</h2>
                    <p class="warning">* Mandatory fields</p>
                    <div class="form__group">
                        <h3>
                            What would you say are the best features of your
                            rubber duck?
                        </h3>
                        <Checkbox
                            {...featuresData}
                            handleChange={handleChange}
                            name="bestFeatures"
                        />
                    </div>
                    <div class="form__group">
                        <h3>
                            What would you say are the worst bits of your rubber
                            duck?
                        </h3>
                        <Checkbox
                            {...featuresData}
                            handleChange={handleChange}
                            name="worstFeatures"
                        />
                    </div>
                    <div class="form__group radio">
                        <h3>How do you rate your rubber duck consistency?</h3>
                        <RadioChoice
                            data={formData}
                            handleChange={handleChange}
                            name="consistencyRating"
                        />
                    </div>
                    <div class="form__group radio">
                        <h3>
                            How do you rate your rubber duck colour?
                            <span class="warning small">*</span>
                        </h3>
                        {colorRatingError && (
                            <p class="error">
                                Please provide a rating for color.
                            </p>
                        )}
                        <RadioChoice
                            data={formData}
                            handleChange={handleChange}
                            name="colorRating"
                        />
                    </div>
                    <div class="form__group radio">
                        <h3>How do you rate your rubber duck logo?</h3>
                        <RadioChoice
                            data={formData}
                            handleChange={handleChange}
                            name="logoRating"
                        />
                    </div>
                    <div class="form__group">
                        <h3>
                            How do you like to spend time with your rubber duck
                        </h3>
                        <Checkbox
                            {...spendingTimeData}
                            handleChange={handleChange}
                            name="spendingTime"
                        />
                    </div>
                    <label>
                        What else have you got to say about your rubber duck?
                        <textarea
                            name="review"
                            cols="30"
                            rows="10"
                            value={formData.review}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    <label>
                        Put your name here (if you feel like it):
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Leave us your email pretty please??
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <input
                        class="form__submit"
                        type="submit"
                        value="Submit Survey!"
                    />
                </form>
            </section>
        </main>
    );
}

export default Main;
