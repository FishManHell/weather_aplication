import { Decorator } from "@storybook/react";
import {setItem} from "helpers/localStorage";

export const LocalStorageDecorator = <T,>(key: string, value: T): Decorator => {
   return (Story) => {
       setItem(key, value);
       return <Story />;
    };
}
