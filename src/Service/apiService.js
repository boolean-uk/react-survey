import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function serviceGetSaved() {
  try {
    const response = await axios.get(`${BASE_URL}/surveys`);
    return response.data;
  } catch (error) {
    console.error("Error getting saved surveys:", error);
    throw error;
  }
}

export async function servicePostSaved(data) {
  try {
    const response = await axios.post(`${BASE_URL}/surveys`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting saved surveys:", error);
    throw error;
  }
}

export async function servicePutSaved(data) {
    try {
      const response = await axios.put(`${BASE_URL}/surveys/${data.id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating saved surveys:", error);
      throw error;
    }
  }
  
