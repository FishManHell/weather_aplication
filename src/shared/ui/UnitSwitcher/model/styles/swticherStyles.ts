import { SxProps } from '@mui/material/styles';

export const unitSwitcherStyles: SxProps = {
    '--Switch-thumbSize': '25px',
    '--Switch-trackWidth': '90px',
    '--Switch-trackHeight': '30px',

    '--Switch-thumbBackground': '#181515',

    '&.Mui-checked': {
        '--Switch-thumbBackground': '#181515',
    },
    '& .MuiSwitch-track': {
        backgroundImage: 'linear-gradient(90deg, rgba(51,224,23,1), rgba(0,0,0,1))',
        backgroundColor: 'transparent',
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none !important',
    },

    '&.Mui-checked .MuiSwitch-thumb': {
        boxShadow: 'none !important',
    },
}