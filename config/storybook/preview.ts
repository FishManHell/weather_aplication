import {Preview} from "@storybook/react";
import {RouterDecorator, StyleDecorator, ThemeDecorator} from "shared/config/storybook";

const decorators = [
    ThemeDecorator,
    StyleDecorator,
    RouterDecorator
]

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: "Theme",
                icon: 'circlehollow',
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
                dynamicTitle: true
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    decorators,
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;