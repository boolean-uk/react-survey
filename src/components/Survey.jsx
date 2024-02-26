import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

const INITIAL_FORM_DATA = {
	id: "",
	color: "",
	timeSpent: [],
	review: "",
	username: "",
	email: "",
};

function Survey() {
	const [open] = useState(false); //Ignore this state
	const [answers, setAnswers] = useState([]);
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	return (
		<main className="survey">
			<section className={`survey__list ${open ? "open" : ""}`}>
				<h2>Answers list</h2>
				<AnswersList answersList={answers} setFormData={setFormData} />
			</section>
			<section className="survey__form">
				<Form
					answers={answers}
					setAnswers={setAnswers}
					formData={formData}
					setFormData={setFormData}
					INITIAL_FORM_DATA={INITIAL_FORM_DATA}
				/>
			</section>
		</main>
	);
}

export default Survey;
