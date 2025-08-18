import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.openweathermap.org/data/2.5/weather`,
        paramsSerializer: (params) => {
            const usp = new URLSearchParams({ appid: process.env.REACT_APP_API_KEY || '' , units: 'metric'});
            for (const key in params) {
                usp.append(key, params[key]);
            }
            return usp.toString();
        }
    }),
    endpoints: (builder) => ({}),
});