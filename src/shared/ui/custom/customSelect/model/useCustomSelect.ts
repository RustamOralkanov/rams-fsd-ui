export const useCustomSelect = (onChange?: (value: unknown) => void) => {
    const handleChange = (value: string | number) => {
        if (onChange) {
            onChange(value);
        }
    };

    return { handleChange };
};
