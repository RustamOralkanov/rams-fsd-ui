import { SelectProps } from "antd";

export interface ICustomSelect extends SelectProps {
    onChange?: (value: unknown) => void;
    title?: string;
    options: {
        id: number;
        name: string;
    }[];
}
