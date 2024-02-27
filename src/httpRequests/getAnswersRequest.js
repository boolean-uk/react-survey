const getAnswersRequest = async () => {
	const response = await fetch("http://localhost:3000/answers");
	const json = await response.json();
	return json;
};

export default getAnswersRequest;
