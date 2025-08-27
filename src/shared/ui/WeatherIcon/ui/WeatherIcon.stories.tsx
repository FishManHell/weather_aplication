import type {Meta, StoryObj} from '@storybook/react';
import {WeatherIcon} from "./WeatherIcon";

const meta = {
    title: 'shared/WeatherIcon',
    component: WeatherIcon,
    tags: ['autodocs'],

} satisfies Meta<typeof WeatherIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        icon: "01d",
        width: 50,
        height: 50,
    }
};
