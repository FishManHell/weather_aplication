import classNames from "classnames";
import {ReactNode, useRef} from "react";
import {useResizeDetector, useResizeDetectorProps} from "react-resize-detector";
import {DefaultStorybookSizes} from "shared/types";

interface ResizeContainerProps extends Omit<useResizeDetectorProps<HTMLDivElement>, "targetRef"> {
    className?: string;
    storybookSizes?: DefaultStorybookSizes;
    children: (width: number, height: number) => ReactNode;
}

const isStorybook = __PROJECT__ === "storybook";

export const ResizeContainer = (props: ResizeContainerProps) => {
    const { className, children, storybookSizes, ...useResizeProps} = props;

    const containerRef = useRef<HTMLDivElement | null>(null);

    const { width: detectedWidth = 0, height: detectedHeight = 0 } = isStorybook
        ? { width: storybookSizes?.width, height: storybookSizes?.height }
        : useResizeDetector({targetRef: containerRef, ...useResizeProps});

    return (
        <div className={classNames("resize-container", className)} ref={containerRef}>
            {children(detectedWidth, detectedHeight)}
        </div>
    );
};
