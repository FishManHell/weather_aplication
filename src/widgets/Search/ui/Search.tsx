import cls from "./Search.module.scss"
import classNames from "classnames";
import {Input} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "shared/lib/hooks";

interface SearchProps {
    className?: string;
    onSearch?: (debounceValue: string) => void;
    delay?: number;
}

export const Search = (props: SearchProps) => {
    const {className, onSearch, delay} = props
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounce(searchValue, delay);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    };

    useEffect(() => {
        if (onSearch && debouncedSearchValue.length) {
            onSearch(debouncedSearchValue);
        }
    }, [debouncedSearchValue]);

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
