const deleteAnswerRequest = (id) => {
	fetch(`http://localhost:3000/answers/${id}`, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
};

export default deleteAnswerRequest;
