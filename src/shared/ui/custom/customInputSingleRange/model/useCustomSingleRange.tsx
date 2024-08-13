import { useState } from "react";

export const useCustomSingleRange = (onChange?: (value: number) => void) => {
    const [value, set_value] = useState<number>(0);

    const handleInputChange = (value: number | null) => {
        if (value !== null) {
            set_value(value);
            if (onChange) {
                onChange(value);
            }
        }
    };

    const handleSliderChange = (value: number) => {
        set_value(value);
        if (onChange) {
            onChange(value);
        }
    };

    return {
        value,
        handleInputChange,
        handleSliderChange,
    };
};
