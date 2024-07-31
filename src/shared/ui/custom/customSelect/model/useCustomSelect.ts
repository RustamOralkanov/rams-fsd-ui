import { OnChangeType } from "./customSelect.model";

export const useCustomSelect = (onChange?: OnChangeType) => {
    const handleChange = (value: string | number) => {
        console.log(`selected ${value}`);
        if (onChange) {
            onChange(value);
        }
    };

    return { handleChange };
};
