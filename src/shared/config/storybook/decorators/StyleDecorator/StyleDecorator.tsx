import { StoryFn} from "@storybook/react";

const StyleDecorator = (Story: StoryFn) => {
    return (
        <div className={"app"}>
            <Story />
        </div>
    )
};

export default StyleDecorator;