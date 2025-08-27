import type {Meta, StoryObj} from '@storybook/react';
import {AppLink} from "./AppLink";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        children: <span>Link</span>,
        to: '/'
    }

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};

export const InverseColor: Story = {
    args: {
        inverse: true
    }
};