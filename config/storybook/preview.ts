import {Preview} from "@storybook/react";
import {RouterDecorator, StyleDecorator, ThemeDecorator} from "shared/config/storybook/decorators";
import {initialize, mswDecorator} from "msw-storybook-addon";

initialize({ onUnhandledRequest: 'bypass' });

const decorators = [
    mswDecorator,
    ThemeDecorator,
    StyleDecorator,
    RouterDecorator,
]

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                icon: "paintbrush",
                dynamicTitle: true,
                items: [
                    { value: "light", left: "☀️", title: "Light mode" },
                    { value: "dark", left: "🌙", title: "Dark mode" },
                ],
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    decorators,
    parameters: {
        msw: [],
        viewport: {
            defaultViewport: 'responsive',
        },
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