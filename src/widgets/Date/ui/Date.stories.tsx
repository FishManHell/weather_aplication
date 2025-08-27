import type {Meta, StoryObj} from '@storybook/react';
import {Date} from "./Date";

const meta = {
    title: 'widgets/Date',
    component: Date,
    tags: ['autodocs'],

} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};