import { useState } from "react";
import { OnChangeType } from "../../customSelect/model/customSelect.model";

export const useCustomTextArea = (onChange?: OnChangeType) => {
    const [value, set_value] = useState({ value: null as string | null, size: 0 });

    const handleChange = (field_value: string) => {
        set_value({ size: field_value.length, value: field_value });
        if (onChange && typeof field_value === "string") {
            onChange(field_value);
        }
    };

    return { value, handleChange };
};
