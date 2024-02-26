import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import { addAnswer, getAnswers } from "../api";
function Survey() {
	const [open, setOpen] = useState(false); //Ignore this state
	const [answers, setAnswers] = useState([]);
	const [editIndex, setEditIndex] = useState(null);
	const [formData, setFormData] = useState({
		colour: "",
		timeSpent: [],
		review: "",
		username: "",
		email: "",
	});

	useEffect(() => {
		getAnswers().then((answers) => setAnswers(answers));
	}, []);

	const edit = (index) => {
		setFormData({ ...answers[index] });
		setEditIndex(index);
	};

	console.log(formData);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			if (checked) {
				console.log("Checked", value);
				setFormData((prevData) => ({
					...prevData,
					timeSpent: [...prevData.timeSpent, value],
				}));
			} else {
				setFormData((prevData) => ({
					...prevData,
					timeSpent: prevData.timeSpent.filter((time) => time !== value),
				}));
			}
		} else if (type === "radio") {
			setFormData((prevData) => ({
				...prevData,
				colour: value,
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (editIndex !== null) {
			answers[editIndex] = formData;
			setAnswers([...answers]);
			setEditIndex(null);
			setFormData({
				colour: "",
				timeSpent: [],
				review: "",
				username: "",
				email: "",
			});
			return;
		}
		setAnswers((prevAnswers) => [...prevAnswers, formData]);
		addAnswer(formData);
		console.log(answers);
	};

	return (
		<main className="survey">
			<section className={`survey__list ${open ? "open" : ""}`}>
				<h2>Answers list</h2>
				<AnswersList answersList={answers} edit={edit} />
			</section>
			<section className="survey__form">
				<form className="form" onSubmit={handleSubmit}>
					<h2>Tell us what you think about your rubber duck!</h2>
					<div className="form__group radio">
						<h3>How do you rate your rubber duck colour?</h3>
						<ul>
							<li>
								<input
									id="color-one"
									type="radio"
									name="color"
									checked={formData.colour === "1"}
									value="1"
									onChange={handleChange}
								/>
								<label htmlFor="color-one">1</label>
							</li>
							<li>
								<input
									id="color-two"
									type="radio"
									name="color"
									checked={formData.colour === "2"}
									value="2"
									onChange={handleChange}
								/>
								<label htmlFor="color-two">2</label>
							</li>
							<li>
								<input
									id="color-three"
									type="radio"
									name="color"
									checked={formData.colour === "3"}
									value="3"
									onChange={handleChange}
								/>
								<label htmlFor="color-three">3</label>
							</li>
							<li>
								<input
									id="color-four"
									type="radio"
									name="color"
									checked={formData.colour === "4"}
									value="4"
									onChange={handleChange}
								/>
								<label htmlFor="color-four">4</label>
							</li>
						</ul>
					</div>
					<div className="form__group">
						<h3>How do you like to spend time with your rubber duck</h3>
						<ul>
							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										checked={formData.timeSpent.includes("swimming")}
										value="swimming"
										onChange={handleChange}
									/>
									Swimming
								</label>
							</li>
							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="bathing"
										checked={formData.timeSpent.includes("bathing")}
										onChange={handleChange}
									/>
									Bathing
								</label>
							</li>
							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="chatting"
										checked={formData.timeSpent.includes("chatting")}
										onChange={handleChange}
									/>
									Chatting
								</label>
							</li>
							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="noTime"
										checked={formData.timeSpent.includes("noTime")}
										onChange={handleChange}
									/>
									I don't like to spend time with it
								</label>
							</li>
						</ul>
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
							name="username"
							value={formData.username}
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
