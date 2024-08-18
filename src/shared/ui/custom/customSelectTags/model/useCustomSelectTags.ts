import { SelectProps } from "antd";
import { useState } from "react";
import { ItemProps } from "./customTags.model";

export const useCustomSelectTags = (onChange: (value: string[]) => void = () => {}) => {
    const options: ItemProps[] = [];

    for (let i = 10; i < 36; i++) {
        const value = i.toString(36) + i;
        options.push({
            label: `${value}`,
            value,
        });
    }

    const sharedProps: SelectProps = {
        mode: "multiple",
        options,
        style: { width: "100%" },
        placeholder: "Выберите",
        maxTagCount: "responsive",
    };

    const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"]);

    const handleChange = (newValue: string[]) => {
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const selectProps: SelectProps = {
        value,
        onChange: handleChange,
    };

    return {
        sharedProps,
        selectProps,
    };
};
