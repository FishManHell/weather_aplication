import type {Meta, StoryObj} from '@storybook/react';
import {BurgerMenu} from "./BurgerMenu";

const meta = {
    title: 'features/BurgerMenu',
    component: BurgerMenu,
    tags: ['autodocs'],

} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    
};