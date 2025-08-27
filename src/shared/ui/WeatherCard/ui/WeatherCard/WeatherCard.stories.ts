import type {Meta, StoryObj} from '@storybook/react';
import {WeatherCard} from "./WeatherCard";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {WeatherCardSize} from "shared/ui/WeatherCard/model/types";
import {cityData} from "shared/config/storybook/mocks";

const meta = {
    title: 'shared/WeatherCard',
    component: WeatherCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof WeatherCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {

    args: {
        city: cityData,
        loading: false,
    },
};

export const Medium: Story = {
    args: {
        city: cityData,
        loading: false,
        size: WeatherCardSize.MEDIUM
    },
};

export const BigLoading: Story = {
    args: {
        loading: true
    }
};

export const MediumLoading: Story = {
    args: {
        loading: true,
        size: WeatherCardSize.MEDIUM
    }
};
