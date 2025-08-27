import type {Meta, StoryObj} from '@storybook/react';
import {NavbarItem} from "./NavbarItem";

const meta = {
    title: 'entities/NavbarItem',
    component: NavbarItem,
    tags: ['autodocs'],
    args: {
        path: "/",
        text: "Today"
    }

} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};