import type {Meta, StoryObj} from '@storybook/react';
import {ThemeSwitcher} from "./ThemeSwitcher";
import {StoreDecorator} from "shared/config/storybook/decorators";

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
