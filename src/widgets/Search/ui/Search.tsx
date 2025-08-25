import cls from "./Search.module.scss"
import classNames from "classnames";
import {IconButton, Input} from "@mui/joy";
import {usePlacesWidget} from "react-google-autocomplete";
import {memo} from "react";
import {useControlledInput} from "shared/lib/hooks";
import { MdSearch } from "react-icons/md";
import { MdClear } from "react-icons/md";
import {ThemedIcon} from "shared/ui/ThemedIcon";

interface SearchProps {
    className?: string;
    onSearch?: (city: string) => void;
}

export const Search = memo((props: SearchProps) => {
    const {className, onSearch} = props;
    const {value, onChangeInputValue: onChange, onChangeValue, reset} = useControlledInput();

    const resetStyles = {
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        padding: 0,
        cursor: "pointer",
        "&:hover": { backgroundColor: "transparent" },
        visibility: value ? "visible" : "hidden",
    }

    const { ref } = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "en-US",
        options: {types: ["(cities)"],},
        onPlaceSelected
    });

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

            <ThemedIcon Icon={MdSearch} className={cls["search-input-icon"]}/>
            <IconButton onClick={reset} className={cls['search-input-icon-reset']} sx={resetStyles}>
                <ThemedIcon Icon={MdClear} className={cls["search-input-icon-reset-icon"]}/>
            </IconButton>
        </div>
    )
});
