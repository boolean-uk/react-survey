import PropTypes from "prop-types";

export default function Form({
	answers,
	setAnswers,
	formData,
	setFormData,
	INITIAL_FORM_DATA,
}) {
	// setFormData(INITIAL_FORM_DATA);

	const logAnswers = () => {
		console.log("Id:", formData.id);
		console.log("Color rating:", formData.color);
		console.log("How time spent:", formData.timeSpent);
		console.log("Review:", formData.review);
		console.log("Username:", formData.username);
		console.log("Email:", formData.email);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const isEditing = answers.some((answer) => answer.id === formData.id);

		const updatedAnswers = isEditing
			? answers.map(
					(answer) =>
						answer.id === formData.id ? { ...formData } : { ...answer }
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  )
			: () => {
					const formDataWithId = { ...formData, id: answers.length };
					setFormData(formDataWithId);
					return [...answers, formData];
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  };

		setAnswers(updatedAnswers);
		logAnswers();

		setFormData(INITIAL_FORM_DATA);
	};

	const handleInput = (event) => {
		const { type, name, value } = event.target;
		console.log(type, name, value);

		const updateCheckboxArray = () => {
			console.log("Name", name);
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
		console.log(formData);
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Tell us what you think about your rubber duck!</h2>
			<div className="form__group radio">
				<h3>How do you rate your rubber duck color?</h3>
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
								name="timeSpent"
								type="checkbox"
								value="swimming"
								checked={formData.timeSpent.includes("swimming")}
								onChange={handleInput}
							/>
							Swimming
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="bathing"
								checked={formData.timeSpent.includes("bathing")}
								onChange={handleInput}
							/>
							Bathing
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="chatting"
								checked={formData.timeSpent.includes("chatting")}
								onChange={handleInput}
							/>
							Chatting
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="noTime"
								checked={formData.timeSpent.includes("noTime")}
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

Form.propTypes = {
	answers: PropTypes.array,
	setAnswers: PropTypes.func,
	formData: PropTypes.object,
	setFormData: PropTypes.func,
	INITIAL_FORM_DATA: PropTypes.object,
};
