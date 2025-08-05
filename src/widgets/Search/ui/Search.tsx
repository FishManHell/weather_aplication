import {Input} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import cls from "./Search.module.scss"
import classNames from "classnames";
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "shared/lib/hooks";

interface SearchProps {
    className?: string;
}

export const Search = ({className}: SearchProps) => {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounce(searchValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    };

    return (
        <div className={classNames(cls['search-container'], className)}>
            <Input
                value={searchValue}
                onChange={onChange}
                className={cls['search-input']}
                startDecorator={<SearchIcon className={cls['search-input-icon']}/>}
                placeholder={"Search location..."}
            />
        </div>
    )
};
