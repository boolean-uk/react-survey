import { useEffect, useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";
import getAnswersRequest from "../httpRequests/getAnswersRequest";
import deleteAnswerRequest from "../httpRequests/deleteAnswerRequest";
import postAnswerRequest from "../httpRequests/postAnwserRequest";
import patchAnswerRequest from "../httpRequests/patchAnswerRequest";

const INITIAL_FORM_DATA = {
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
	const [shouldFetchAnswers, setShouldFetchAnswers] = useState(true);

	const deleteAnswer = (id) => {
		deleteAnswerRequest(id);
		setFormData(INITIAL_FORM_DATA);
		setShouldFetchAnswers(true);
	};

	const postAnswer = (body) => {
		postAnswerRequest(body);
		setFormData(INITIAL_FORM_DATA);
		setShouldFetchAnswers(true);
	};

	const editAnswer = (id, body) => {
		patchAnswerRequest(id, body);
		setFormData(INITIAL_FORM_DATA);
		setShouldFetchAnswers(true);
	};

	useEffect(() => {
		if (shouldFetchAnswers) {
			getAnswersRequest().then(setAnswers);
			setShouldFetchAnswers(false);
		}
	}, [shouldFetchAnswers]);

	return (
		<main className="survey">
			<section className={`survey__list ${open ? "open" : ""}`}>
				<h2>Answers list</h2>
				<AnswersList
					answersList={answers}
					setFormData={setFormData}
					deleteAnswer={deleteAnswer}
				/>
			</section>
			<section className="survey__form">
				<Form
					answers={answers}
					formData={formData}
					setFormData={setFormData}
					postAnswer={postAnswer}
					editAnswer={editAnswer}
				/>
			</section>
		</main>
	);
}

export default Survey;
