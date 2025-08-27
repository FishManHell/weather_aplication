import type {Meta, StoryObj} from '@storybook/react';
import {NavbarItems} from "./NavbarItems";

const meta = {
    title: 'entities/NavbarItems',
    component: NavbarItems,
    tags: ['autodocs'],

} satisfies Meta<typeof NavbarItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};