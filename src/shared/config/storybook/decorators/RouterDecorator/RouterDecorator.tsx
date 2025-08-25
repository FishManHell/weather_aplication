import {StoryContext, StoryFn} from "@storybook/react";
import {MemoryRouter, Route, Routes} from "react-router-dom";

const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
    const route = context.parameters?.route || '/';
    const path = context.parameters?.path || '*';
    return (
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path={path} element={<Story />} />
            </Routes>
        </MemoryRouter>
    )
};

export default RouterDecorator;