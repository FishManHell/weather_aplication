import cls from "./Toast.module.scss"
import classNames from "classnames";
import {Alert, Snackbar} from "@mui/joy";
import type { OverridableStringUnion } from "@mui/types";
import type { ColorPaletteProp, AlertPropsColorOverrides } from "@mui/joy";
import {memo} from "react";

export enum ToastSeverity {
    Success = "success",
    Danger = "danger",
    Info = "info",
    Warning = "warning",
    Primary = "primary",
    Neutral = "neutral",
}

type JoyAlertColor = OverridableStringUnion<ColorPaletteProp, AlertPropsColorOverrides>;

interface ToastProps {
    open: boolean;
    onClose: () => void;
    message: string;
    severity?: ToastSeverity;
    duration?: number;
    className?: string;
    inverted?: boolean;
}
export const Toast = memo((props: ToastProps) => {
    const {open, onClose, severity = ToastSeverity.Success, message, duration = 300, inverted = true, className} = props

    return (
        <Snackbar
            open={open}
            onClose={onClose}
            autoHideDuration={duration}
            className={classNames(cls["toast"], className)}
        >
            <Alert color={severity as JoyAlertColor} variant="soft" className={cls["toast-alert"]}>
                {message}
            </Alert>
        </Snackbar>
    );
});
