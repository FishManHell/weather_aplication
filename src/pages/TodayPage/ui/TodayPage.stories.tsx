import type {Meta, StoryObj} from '@storybook/react';
import TodayPage from "./TodayPage";
import {StoreDecorator} from "shared/config/storybook";

const obj = {
    "coord": {
        "lon": 34.5567,
        "lat": 31.6794
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 29.47,
        "feels_like": 31.85,
        "temp_min": 29.47,
        "temp_max": 29.47,
        "pressure": 1008,
        "humidity": 60,
        "sea_level": 1008,
        "grnd_level": 1006
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.37,
        "deg": 280,
        "gust": 5.61
    },
    "clouds": {
        "all": 0
    },
    "dt": 1756129094,
    "sys": {
        "country": "IL",
        "sunrise": 1756091593,
        "sunset": 1756138498
    },
    "timezone": 10800,
    "id": 295620,
    "name": "Ashquelon",
    "cod": 200
}

const array = [
    {
        "dt": 1756134000,
        "temp": 31.76,
        "feels_like": 34.89,
        "pressure": 1008,
        "humidity": 54,
        "dew_point": 21.31,
        "uvi": 0.42,
        "clouds": 16,
        "visibility": 10000,
        "wind_speed": 4.85,
        "wind_deg": 265,
        "wind_gust": 5.37,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "pop": 0
    },
    {
        "dt": 1756144800,
        "temp": 28.96,
        "feels_like": 31.28,
        "pressure": 1008,
        "humidity": 62,
        "dew_point": 20.95,
        "uvi": 0,
        "clouds": 4,
        "visibility": 10000,
        "wind_speed": 3.22,
        "wind_deg": 252,
        "wind_gust": 3.78,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "pop": 0
    },
]

const meta = {
    title: 'pages/TodayPage',
    component: TodayPage,
    tags: ['autodocs'],

} satisfies Meta<typeof TodayPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            api: {
                today: {
                    location: {
                        city: obj,
                    },
                    forecastHourly: {
                        hourly: array,
                    }
                }
            }
        })
    ]
};
