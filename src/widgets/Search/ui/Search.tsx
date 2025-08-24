import cls from "./Search.module.scss"
import classNames from "classnames";
import {IconButton, Input} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {usePlacesWidget} from "react-google-autocomplete";
import {memo} from "react";
import {useControlledInput} from "shared/lib/hooks";

interface SearchProps {
    className?: string;
    onSearch?: (city: string) => void;
}

export const Search = memo((props: SearchProps) => {
    const {className, onSearch} = props;
    const {value, onChangeInputValue: onChange, onChangeValue, reset} = useControlledInput();

    const { ref } = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "en-US",
        options: {types: ["(cities)"],},
        onPlaceSelected
    });

    const clearBtnMods = {
        [cls['visible']]: !!value
    }

    function onPlaceSelected(place: google.maps.places.PlaceResult) {
        const city = place.address_components?.find(c => {
            return c.types.includes("locality")
        });

        if (!city) return;

        const onlyCity = city.long_name;

        if (place.formatted_address) {
            const parts = place.formatted_address.split(",");
            const cityPart = parts.slice(0, parts.length - 1).join(",").trim();
            onChangeValue(cityPart);
        }

        onSearch?.(onlyCity);
        console.log("Chosen city:", place);
    }

    return (
        <div className={classNames(cls['search-container'], className)}>
            <Input
                value={value}
                onChange={onChange}
                placeholder={"Search location..."}
                slotProps={{input: { ref}}}
                className={cls['search-input']}
            />
            <SearchIcon className={cls['search-input-icon']} sx={{fontSize: "clamp(25px, 4vw, 35px)"}}/>

            <IconButton
                onClick={reset}
                className={classNames(cls['search-input-icon-reset'], clearBtnMods)}
                sx={{"&:hover": {backgroundColor: "transparent"}}}
            >
                <ClearIcon/>
            </IconButton>
        </div>
    )
});
