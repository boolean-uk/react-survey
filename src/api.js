import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getAnswers = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/answers`);
		return response.data;
	} catch (error) {
		console.error("Error getting answers:", error);
		throw error;
	}
};

export const addAnswer = async (answer) => {
	try {
		const response = await axios.post(`${BASE_URL}/answers`, answer);
		return response.data;
	} catch (error) {
		console.error("Error adding answer:", error);
		throw error;
	}
};

export const deleteAnswer = async (answerId) => {
	try {
		const response = await axios.delete(`${BASE_URL}/answers/${answerId}`);
		return response.data;
	} catch (error) {
		console.error("Error deleting answer:", error);
		throw error;
	}
};
