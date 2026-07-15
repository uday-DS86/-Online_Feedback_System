import axios from "axios";

const API_URL = "http://localhost:8080/feedback";

const getAllFeedback = () => {
    return axios.get(`${API_URL}/all`);
};

const saveFeedback = (feedback) => {
    return axios.post(`${API_URL}/submit`, feedback);
};

const deleteFeedback = (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};

export default {
    getAllFeedback,
    saveFeedback,
    deleteFeedback,
};