import type {Meta, StoryObj} from '@storybook/react';
import TodayPage from "./TodayPage";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {cityData, hourlyData} from "shared/config/storybook/mocks";

const hourlyList = [
    hourlyData,
    hourlyData
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
                        city: cityData,
                    },
                    forecastHourly: {
                        hourly: hourlyList,
                    }
                }
            }
        })
    ]
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            api: {
                today: {
                    location: {
                        isLoading: true,
                    },
                    forecastHourly: {
                        isLoading: true,
                    }
                }
            }
        })
    ]
};
