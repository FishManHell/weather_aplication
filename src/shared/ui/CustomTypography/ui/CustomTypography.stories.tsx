import type {Meta, StoryObj} from '@storybook/react';
import {CustomTypography} from "./CustomTypography";

const meta = {
    title: 'shared/CustomTypography',
    component: CustomTypography,
    tags: ['autodocs'],
    args: {
        level: 'h1',
        responsiveSizes: {h1: "clamp(35px, 5vw, 60px)"},
        children: <div>Hello</div>
    }

} satisfies Meta<typeof CustomTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const InverseColor: Story = {
    args: {
        inverse: true
    }
};