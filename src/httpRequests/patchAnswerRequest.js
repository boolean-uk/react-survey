const patchAnswerRequest = (id, body) => {
	fetch(`http://localhost:3000/answers/${id}`, {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
};

export default patchAnswerRequest;
