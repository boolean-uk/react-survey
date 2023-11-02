import { useState } from "react";
import CheckboxesInputs from "./CheckboxesInputs";
import RadioInputs from "./RadioInputs";

const questionsList = [
    {
        title: "How do you rate your rubber duck colour?",
        type: "radio",
        name: "color",
        questions: [
            {
                id: "color-one",
                value: 1,
            },
            {
                id: "color-two",
                value: 2,
            },
            {
                id: "color-three",
                value: 3,
            },
            {
                id: "color-four",
                value: 4,
            },
        ],
    },
    {
        title: "How do you like to spend time with your rubber duck?",
        type: "checkbox",
        name: "timeSpent",
        questions: [
            {
                value: "swimming",
            },
            {
                value: "bathing",
            },
            {
                value: "chatting",
            },
            {
                value: "noTime",
            },
        ],
    },
];

const QuestionsForm = ({ handleAnswers }) => {
    const [key, setKey] = useState(0);
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        review: "",
    });

    console.log(inputs);

    // submit

    const submitForm = (e) => {
        e.preventDefault();

        handleAnswers(inputs);

        setInputs({
            username: "",
            email: "",
            review: "",
        });
        setKey((k) => k + 1);
    };

    // handle changes

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        if (type === "checkbox") {
            if (!checked) {
                setInputs({
                    ...inputs,
                    [name]: [...inputs[name].filter((item) => item !== value)],
                });
            } else if (inputs[name]) {
                setInputs({ ...inputs, [name]: [...inputs[name], value] });
            } else {
                setInputs({ ...inputs, [name]: [value] });
            }
        } else {
            setInputs({ ...inputs, [name]: value });
        }
    };

    return (
        <form className="form" onSubmit={submitForm} key={key}>
            <h2>Tell us what you think about your rubber duck!</h2>
            {questionsList.map((item, index) => {
                if (item.type === "radio") {
                    return (
                        <div className="form__group radio" key={index}>
                            <h3>{item.title}</h3>
                            <RadioInputs
                                name={item.name}
                                questions={item.questions}
                                handleChange={handleChange}
                            />
                        </div>
                    );
                } else if (item.type === "checkbox") {
                    return (
                        <div className="form__group" key={index}>
                            <h3>{item.title}</h3>
                            <CheckboxesInputs
                                name={item.name}
                                questions={item.questions}
                                handleChange={handleChange}
                            />
                        </div>
                    );
                }
            })}
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols="30"
                    rows="10"
                    onChange={(e) => handleChange(e)}
                    value={inputs.review}
                ></textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <input
                className="form__submit"
                type="submit"
                value="Submit Survey!"
            />
        </form>
    );
};

export default QuestionsForm;
