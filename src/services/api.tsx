import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const BASE_PATH = `${BASE_URL}/api/david`

const api = axios.create({
    baseURL: BASE_PATH,
    headers: {"Content-Type": "application/json"}
})

export const getProjects = async () => {
    try {
        const res = await api.get("/projects");
        return res.data;
    } catch (e) {
        throw(e);
    }
}

export const contactForm = async (params: {
    name: string,
    email: string,
    message: string
}) => {
    try {
        const res = await api.post("/contact", params);
        console.log(res);
        return res.data;
    } catch (e) {
        throw(e);
    }
}

export const resume = async () => {
    try {
        const res = await api.get("/resume");
        return res.data
    } catch (e) {
        throw(e);
    }
}