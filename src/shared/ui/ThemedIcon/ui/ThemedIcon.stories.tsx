import type {Meta, StoryObj} from '@storybook/react';
import {ThemedIcon} from "./ThemedIcon";
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";

const meta = {
    title: 'shared/ThemedIcon',
    component: ThemedIcon,
    tags: ['autodocs'],

} satisfies Meta<typeof ThemedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inactive: Story = {
    args: {
        Icon: MdStarBorder
    }
};

export const Active: Story = {
    args: {
        Icon: MdStarBorder,
        ActiveIcon: MdStar,
        isActive: true
    }
};
