import axios, {AxiosInstance} from "axios";
import {getEnvVar} from "shared/config/env/env";

const REACT_APP_API_KEY = getEnvVar('REACT_APP_API_KEY');

// 'https://api.openweathermap.org/data/2.5/weather'

export const $api = (baseURL: string): AxiosInstance => {
    return axios.create({
        baseURL,
        params: {
            appid: REACT_APP_API_KEY,
        }
    })
}