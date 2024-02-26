import { useState } from "react";

const INITIAL_FORM_DATA = {
	color: "",
	spendTime: [],
	review: "",
	username: "",
	email: "",
};

export default function Form() {
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	const logAnswers = () => {
		console.log("Colour rating:", formData.color);
		console.log("How time spent:", formData.spendTime);
		console.log("Review:", formData.review);
		console.log("Username:", formData.username);
		console.log("Email:", formData.email);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		logAnswers();
		console.log(event);
		console.log("Clicked submit");
		setFormData(INITIAL_FORM_DATA);
	};

	const handleInput = (event) => {
		const { type, name, value } = event.target;
		console.log(type, name, value);

		const updateCheckboxArray = () => {
			if (formData[name].includes(value)) {
				return {
					...formData,
					[name]: formData[name].filter((arrayItem) => arrayItem !== value),
				};
			} else {
				return { ...formData, [name]: [...formData[name], value] };
			}
		};

		switch (type) {
			case "radio":
				setFormData({ ...formData, [name]: value });
				break;
			case "checkbox":
				setFormData(updateCheckboxArray());
				break;
			default:
				setFormData({ ...formData, [name]: value });
				break;
		}
	};
	return (
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
							value="1"
							checked={formData.color === "1"}
							onChange={handleInput}
						/>
						<label htmlFor="color-one">1</label>
					</li>
					<li>
						<input
							id="color-two"
							type="radio"
							name="color"
							value="2"
							checked={formData.color === "2"}
							onChange={handleInput}
						/>
						<label htmlFor="color-two">2</label>
					</li>
					<li>
						<input
							id="color-three"
							type="radio"
							name="color"
							value="3"
							checked={formData.color === "3"}
							onChange={handleInput}
						/>
						<label htmlFor="color-three">3</label>
					</li>
					<li>
						<input
							id="color-four"
							type="radio"
							name="color"
							value="4"
							checked={formData.color === "4"}
							onChange={handleInput}
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
								name="spendTime"
								type="checkbox"
								value="swimming"
								checked={formData.spendTime.includes("swimming")}
								onChange={handleInput}
							/>
							Swimming
						</label>
					</li>
					<li>
						<label>
							<input
								name="spendTime"
								type="checkbox"
								value="bathing"
								checked={formData.spendTime.includes("bathing")}
								onChange={handleInput}
							/>
							Bathing
						</label>
					</li>
					<li>
						<label>
							<input
								name="spendTime"
								type="checkbox"
								value="chatting"
								checked={formData.spendTime.includes("chatting")}
								onChange={handleInput}
							/>
							Chatting
						</label>
					</li>
					<li>
						<label>
							<input
								name="spendTime"
								type="checkbox"
								value="noTime"
								checked={formData.spendTime.includes("noTime")}
								onChange={handleInput}
							/>
							{`I don't like to spend time with it`}
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
					onChange={handleInput}
				></textarea>
			</label>
			<label>
				Put your name here (if you feel like it):
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleInput}
				/>
			</label>
			<label>
				Leave us your email pretty please??
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInput}
				/>
			</label>
			<input className="form__submit" type="submit" value="Submit Survey!" />
		</form>
	);
}
