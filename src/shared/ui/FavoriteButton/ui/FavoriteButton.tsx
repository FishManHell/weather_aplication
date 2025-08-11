import classNames from "classnames";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {memo} from "react";

const MyIconButton = styled(IconButton)(({ theme }) => ({
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
    onToggleFavorite?: () => void;
    isFavorite?: boolean;
}

export const FavoriteButton = memo((props: FavoriteButtonProps) => {
    const {className, onToggleFavorite, isFavorite} = props;

    return (
        <MyIconButton
            className={classNames("favorite-button", className)}
            size={'large'}
            onClick={onToggleFavorite}
        >
            {isFavorite ? <StarIcon/> : <StarOutlineIcon/>}
        </MyIconButton>
    );
});
