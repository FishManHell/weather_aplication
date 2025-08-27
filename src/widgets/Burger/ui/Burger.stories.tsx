import type {Meta, StoryObj} from '@storybook/react';
import {Burger} from "./Burger";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'widgets/Burger',
    component: Burger,
    tags: ['autodocs'],
    args: {
        onToggle: action("onToggle"),
    }

} satisfies Meta<typeof Burger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
    args: {
        isOpen: false,
    }
};

export const Open: Story = {
    args: {
        isOpen: true,
    }
};