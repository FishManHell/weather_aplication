import type {Meta, StoryObj} from '@storybook/react';
import FavoritePage from "./FavoritePage";
import {cityData} from "shared/config/storybook/mocks";
import {Favorite} from "shared/ui/WeatherCard";
import {LocalStorageDecorator, StoreDecorator} from "shared/config/storybook/decorators";

const meta = {
    title: 'pages/FavoritePage',
    component: FavoritePage,
    tags: ['autodocs'],
    decorators: [
        LocalStorageDecorator<Favorite[]>('favorites', ["295620", "295621"]),
    ]

} satisfies Meta<typeof FavoritePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({
            api: {
                favorites: {
                    entities: {
                        "295620" : {
                            city: cityData
                        },
                        "295621" : {
                            city: {...cityData, id: 295621}
                        }
                    }
                }
            }
        })
    ]
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            api: {
                favorites: {
                    entities: {
                        "295620" : {
                            city: undefined,
                            loading: true,
                            error: undefined
                        },
                        "295621": {
                            city: undefined,
                            loading: true,
                            error: undefined
                        }
                    }
                }
            }
        })
    ]
};
