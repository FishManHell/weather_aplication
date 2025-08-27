import type {Meta, StoryObj} from '@storybook/react';
import {Temperature} from "./Temperature";
import {StoreDecorator} from "shared/config/storybook/decorators";

const meta = {
    title: 'shared/Temperature',
    component: Temperature,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof Temperature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
    args: {
        value: 32,
        level: 'h1'
    }
};

export const Medium: Story = {
    args: {
        value: 30,
        level: "h4"
    }
};

export const Small: Story = {
    args: {
        value: 25,
        level: "body-sm"
    }
};



