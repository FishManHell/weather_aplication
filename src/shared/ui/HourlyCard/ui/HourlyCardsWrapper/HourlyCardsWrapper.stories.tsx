import type {Meta, StoryObj} from '@storybook/react';
import {HourlyCardsWrapper} from "./HourlyCardsWrapper";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {hourlyData} from "shared/config/storybook/mocks";

const meta = {
    title: 'shared/HourlyCardsWrapper',
    component: HourlyCardsWrapper,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof HourlyCardsWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: [hourlyData]
    }
};

export const Loading: Story = {
    args: {
        loading: true,
        countSkeleton: 1
    }
};

