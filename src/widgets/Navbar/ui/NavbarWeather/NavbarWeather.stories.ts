import type {Meta, StoryObj} from '@storybook/react';
import {NavbarWeather} from "./NavbarWeather";
import {StoreDecorator} from "shared/config/storybook/decorators";
import {DEFAULT_COORDINATES} from "shared/lib/constants/constants";
import {handlers} from "shared/config/mswMocks/handlers";


const meta = {
    title: 'widgets/NavbarWeather',
    component: NavbarWeather,
    tags: ['autodocs'],
    parameters: {
        msw: handlers
    }

} satisfies Meta<typeof NavbarWeather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
};

export const Error: Story = {
    decorators: [
        StoreDecorator({
            ui: {
                currentLocation: {
                    error: {message: "Location Denied", code: 1}
                }
            }
        }),
    ]
};