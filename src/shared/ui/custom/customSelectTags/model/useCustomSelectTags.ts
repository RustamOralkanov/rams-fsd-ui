import { SelectProps } from "antd";
import { ICustomSelectTags } from "./customTags.model";

export const useCustomSelectTags = (props: ICustomSelectTags) => {
    const sharedProps: SelectProps = {
        mode: "multiple",
        style: { width: "100%" },
        placeholder: "Выберите",
        maxTagCount: "responsive",
    };

    const handleChange = (value: number[]) => {
        if (props.onChange) {
            props.onChange(value);
        }
    };

    return {
        sharedProps,
        handleChange,
    };
};
