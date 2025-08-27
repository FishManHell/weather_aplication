import type {Meta, StoryObj} from '@storybook/react';
import {Navbar} from "./Navbar";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {DEFAULT_COORDINATES} from "shared/lib/constants/constants";
import {handlers} from "shared/config/mswMocks/handlers";

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        msw: handlers
    },
    decorators: [
        StoreDecorator({
            ui: {
                currentLocation: {
                    location: DEFAULT_COORDINATES,
                    error: undefined
                }
            }
        }),
    ]

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        storybookSizes: {
            width: 1920,
            height: 1080
        }
    },
};

export const BurgerSize: Story = {
    args: {
        storybookSizes: {
            width: 600,
            height: 1080
        }
    },
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            ui: {
                currentLocation: {
                    location: undefined,
                    error: {message: "Location Denied", code: 1}
                }
            }
        }),
    ]
};