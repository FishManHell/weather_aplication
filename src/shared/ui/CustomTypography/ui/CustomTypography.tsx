import { Typography, TypographyProps } from "@mui/joy";
import {ReactNode} from "react";

interface InverseTypographyProps extends TypographyProps {
    inverse?: boolean;
    responsiveSizes?: {
        [level: string]: string;
    };
    children?: ReactNode;
}

export const CustomTypography = (props: InverseTypographyProps) => {
    const { inverse, level = "body-lg", sx, responsiveSizes, children, ...rest } = props;

    const fontSize = responsiveSizes?.[level] || rest.fontSize;

    return (
        <Typography
            {...rest}
            sx={{ color: (theme) => {
                return inverse
                    ? theme.palette.text.secondary
                    : theme.palette.text.primary
                },
                fontSize,
                ...sx
        }}
        >
            {children}
        </Typography>
    );
};