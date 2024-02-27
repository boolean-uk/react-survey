const postAnswerRequest = (body) => {
	fetch("http://localhost:3000/answers", {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
};

export default postAnswerRequest;
