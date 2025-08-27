import type {Meta, StoryObj} from '@storybook/react';
import {HourlyCard} from "./HourlyCard";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {hourlyData} from "shared/config/storybook/mocks";

const meta = {
    title: 'shared/HourlyCard',
    component: HourlyCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof HourlyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        hourlyData
    }
};

