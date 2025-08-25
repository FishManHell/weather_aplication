import classNames from "classnames";
import {ConfigType} from "dayjs";
import {ComponentProps, FC, memo} from "react";
import {correctFormatDate, DATE_FORMATS} from "helpers/time";
import {Typography} from "@mui/joy";

interface FormattedDateProps {
    className?: string;
    time: ConfigType
    format?: DATE_FORMATS;
    level?: ComponentProps<typeof Typography>['level']
}

export const FormattedDate: FC<FormattedDateProps> = memo((props) => {
    const {className, time, format = DATE_FORMATS.FULL, level} = props;
    const date = correctFormatDate(time, format)

    return (
        <Typography level={level} className={classNames("formatted-date", className)}>
            {date}
        </Typography>
    );
});
