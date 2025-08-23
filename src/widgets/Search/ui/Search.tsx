import cls from "./Search.module.scss"
import classNames from "classnames";
import {Input} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import {usePlacesWidget} from "react-google-autocomplete";

interface SearchProps {
    className?: string;
    onSearch?: (city: string) => void;
}

export const Search = (props: SearchProps) => {
    const {className, onSearch} = props;

    const { ref } = usePlacesWidget<HTMLInputElement>({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        language: "en-US",
        options: {
            types: ["(cities)"]
        },
        onPlaceSelected: (place: google.maps.places.PlaceResult) => {
            const city = place.address_components?.find(c => {
                return c.types.includes("locality")
            });

            if (!city) return;

            onSearch?.(city?.long_name);

            console.log("Chosen city:", place);
        },
    });

    return (
        <div className={classNames(cls['search-container'], className)}>
            <Input
                placeholder={"Search location..."}
                slotProps={{input: { ref}}}
                className={cls['search-input']}
                startDecorator={<SearchIcon className={cls['search-input-icon']}/>}
            />
        </div>
    )

};
