import { useState } from "react";
import Checkbox from "./Checkbox";
import RadioChoice from "./RadioChoice";

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
    const [formData, setFormData] = useState(initialState);
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
        console.log(formData);
        setFormData(initialState);
    };
    return (
        <main className="main">
            <section className={`main__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                {/* answers should go here */}
            </section>
            <section className="main__form">
                <form class="form" onSubmit={handleSubmit}>
                    <h2>Tell us what you think about your rubber duck!</h2>
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
                        <h3>How do you rate your rubber duck colour?</h3>
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
