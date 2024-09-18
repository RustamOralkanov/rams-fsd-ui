import { SelectProps } from "antd";

export interface ICustomSelectTags extends SelectProps {
    onChange?: (value: unknown) => void;
    value?: {
        name: string;
        id: string;
    }[];
}
