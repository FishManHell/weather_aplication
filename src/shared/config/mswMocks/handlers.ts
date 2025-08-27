import {http, HttpResponse} from "msw";
import {defaultCity} from "./mockData";

export const handlers = [
    http.get('https://api.openweathermap.org/data/2.5/weather', () => {
        return HttpResponse.json(defaultCity)
    }),
];