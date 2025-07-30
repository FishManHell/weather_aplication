import cls from "./Date.module.scss"
import classNames from "classnames";
import {memo, useCallback, useEffect, useState} from "react";

type TimeZone = 'PM' | 'AM';

interface DateProps {
    className?: string;
    timezone?: TimeZone
}

export const Date = memo((props: DateProps) => {
    const { className, timezone} = props;
    const [date, setDate] = useState<globalThis.Date>(new globalThis.Date())

    const updateMinutes = useCallback(() => {
        const min = date.getMinutes();
        if (min >= 0 && min <= 9) return `0${min}`
        return min
    }, [date])

    const time = `${date.getHours()}:${updateMinutes()}`

    const updateTime = () => {
        const dateTest: globalThis.Date = new globalThis.Date();
        setDate(dateTest);
    }

    useEffect(() => {
        const timer = setTimeout(updateTime, 60_000)

        return () => clearTimeout(timer);
    }, [date]);

    return (
        <p className={classNames(cls["date"], className)}>
            <span>{time}</span>
            <span>pm</span>
        </p>
    );
});
