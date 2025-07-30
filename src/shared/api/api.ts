import axios from "axios";

export const $api = axios.create({
    baseURL: "https://api.openweathermap.org/data",
    params: {
        appid: process.env.REACT_APP_API_KEY,
    }
})