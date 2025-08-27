import type {Meta, StoryObj} from '@storybook/react';
import {UnitSwitcher} from "./UnitSwitcher";
import {StoreDecorator} from "shared/config/storybook/decorators";

const meta = {
    title: 'shared/UnitSwitcher',
    component: UnitSwitcher,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]

} satisfies Meta<typeof UnitSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
