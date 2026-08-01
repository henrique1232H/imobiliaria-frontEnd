import axios from "axios";

export const api = axios.create({
    baseURL: "https://imobiliaria-backend-1.onrender.com"
})