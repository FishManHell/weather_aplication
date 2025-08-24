import {ChangeEvent, useCallback, useState} from "react";

interface UseControlledInputReturn {
    value: string;
    onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeValue: (newValue: string) => void;
    reset: () => void;
}

export function useControlledInput(defaultValue?: string): UseControlledInputReturn {
    const [value, setValue] = useState<string>(defaultValue || '');

    const onChangeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onChangeValue = useCallback((newValue: string) => setValue(newValue), []);

    const reset = useCallback(() => setValue(''), []);

    return { value, onChangeInputValue, onChangeValue, reset };
}