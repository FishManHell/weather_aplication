import type {Meta, StoryObj} from '@storybook/react';
import {FormattedDate} from "./FormattedDate";
import {DATE_FORMATS} from "helpers/time";

const meta = {
    title: 'shared/FormattedDate',
    component: FormattedDate,
    tags: ['autodocs'],
    args: {
        time: new Date(),
        format: DATE_FORMATS.FULL,
        level: 'h1'
    }

} satisfies Meta<typeof FormattedDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};

export const ShortDate: Story = {
    args: {
        format: DATE_FORMATS.SHORT
    }
}

export const Time: Story = {
    args: {
        format: DATE_FORMATS.TIME
    }
}
