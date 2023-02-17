import { useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

const initialFormState = {
	colourRating: "",
	spendTime: "",
	comments: "",
	ownerName: "",
	email: "",
};

function Main() {
	const [open, setOpen] = useState(false); //Ignore this state
	const [formState, setFormState] = useState(initialFormState);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		setFormState(initialFormState);
	};

	const handleChange = (e) => {
		const targetName = e.target.name;
		const targetValue = e.target.value;

		if (targetName === "color") {
			setFormState({ ...formState, colourRating: targetValue });
		}
		if (targetName === "spend-time") {
			setFormState({ ...formState, spendTime: targetValue });
		}
		if (targetName === "review") {
			setFormState({ ...formState, comments: targetValue });
		}
		if (targetName === "username") {
			setFormState({ ...formState, ownerName: targetValue });
		}
		if (targetName === "email") {
			setFormState({ ...formState, email: targetValue });
		}
	};

	return (
		<main className="main">
			<section className={`main__list ${open ? "open" : ""}`}>
				<h2>Answers list</h2>
				{/* answers should go here */}
			</section>
			<section className="main__form">
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
									checked={formState.colourRating === "1"}
									onChange={handleChange}
								/>
								<label htmlFor="color-one">1</label>
							</li>
							<li>
								<input
									id="color-two"
									type="radio"
									name="color"
									value="2"
									checked={formState.colourRating === "2"}
									onChange={handleChange}
								/>
								<label htmlFor="color-two">2</label>
							</li>
							<li>
								<input
									id="color-three"
									type="radio"
									name="color"
									value="3"
									checked={formState.colourRating === "3"}
									onChange={handleChange}
								/>
								<label htmlFor="color-three">3</label>
							</li>
							<li>
								<input
									id="color-four"
									type="radio"
									name="color"
									value="4"
									checked={formState.colourRating === "4"}
									onChange={handleChange}
								/>
								<label htmlFor="color-four">4</label>
							</li>
						</ul>
					</div>
					<div className="form__group">
						<h3>How do you like to spend time with your rubber duck?</h3>
						<ul>
							<li>
								<label>
									<input
										name="spend-time"
										type="checkbox"
										value="swimming"
										checked={formState.spendTime === "swimming"}
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
										checked={formState.spendTime === "bathing"}
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
										checked={formState.spendTime === "chatting"}
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
										checked={formState.spendTime === "noTime"}
										onChange={handleChange}
									/>
									I don't like to spend time with it
								</label>
							</li>
						</ul>
					</div>
					<label>
						What else do you have to say about your rubber duck?
						<textarea
							name="review"
							cols="30"
							rows="10"
							value={formState.comments}
							onChange={handleChange}
						></textarea>
					</label>
					<label>
						Put your name here (if you like having your data on the internet
						idk):
						<input
							type="text"
							name="username"
							value={formState.ownerName}
							onChange={handleChange}
						/>
					</label>
					<label>
						Leave us your email please? (We won't sell it, promise!)
						<input
							type="email"
							name="email"
							value={formState.email}
							onChange={handleChange}
						/>
					</label>
					<input
						className="form__submit"
						type="submit"
						value="Give us your info!"
					/>
				</form>
			</section>
		</main>
	);
}

export default Main;
