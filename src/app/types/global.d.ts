declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';

declare module "*.svg" {
    import React from "react";
    const SVG: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    export default SVG;
}

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

declare const __IS_DEV__: boolean;
declare const __PROJECT__: string