import type {Meta, StoryObj} from '@storybook/react';
import {FavoriteButton} from "./FavoriteButton";
import {action} from "@storybook/addon-actions";

const meta = {
    title: 'shared/FavoriteButton',
    component: FavoriteButton,
    tags: ['autodocs'],
    args: {
        handleFavoriteToggle: action("handleFavoriteToggle"),
    },
    render: (args) => {
        return (
            <div
                style={{ position: 'relative', width: '100px', height: '100px',}}
            >
                <FavoriteButton {...args} />
            </div>
        )
    }

} satisfies Meta<typeof FavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        isFavorite: true,
    }
};

export const Inactive: Story = {
    args: {
        isFavorite: false,
    }
};
