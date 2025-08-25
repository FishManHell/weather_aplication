import classNames from "classnames";
import cls from "./FavoriteButton.module.scss"
import {IconButton, styled} from '@mui/joy';
import {memo} from "react";
import {ThemedIcon} from "shared/ui/ThemedIcon";

import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";

const MyIconButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: '0.875rem',
    right: '0.5rem',
    '&:hover': {
        backgroundColor: 'transparent',
        transform: 'scale(1.1)',
        transition: 'all 0.3s linear',
    },
}));

interface FavoriteButtonProps {
    className?: string;
    handleFavoriteToggle?: () => void;
    isFavorite?: boolean;
}

export const FavoriteButton = memo((props: FavoriteButtonProps) => {
    const {className, handleFavoriteToggle, isFavorite} = props;

    return (
        <MyIconButton
            className={classNames("favorite-button", className)}
            size={"lg"}
            onClick={handleFavoriteToggle}
        >
            <ThemedIcon
                ActiveIcon={MdStar}
                Icon={MdStarBorder}
                isActive={isFavorite}
                className={cls['favorite-button-icon']}
            />
        </MyIconButton>
    );
});
