import type {Meta, StoryObj} from '@storybook/react';
import {Search} from "./Search";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'widgets/Search',
    component: Search,
    tags: ['autodocs'],
    args: {
        onSearch: action('onSearch'),
    },

} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};