import dayjs, {ConfigType} from "dayjs";

export enum DATE_FORMATS {
    FULL = "YYYY-MM-DD HH:mm:ss",
    SHORT = "MMM DD, ddd",
    TIME =  "HH:mm",
}

const isUnixSeconds = (value: number) => value.toString().length === 10;

export const getTime = (time: ConfigType) => {
    if (typeof time === 'number') return dayjs(isUnixSeconds(time) ? time * 1000 : time);

    return dayjs(time);
}
export const correctFormatDate = (date: ConfigType, format_date = DATE_FORMATS.FULL) => {
    return getTime(date).format(format_date);
}
