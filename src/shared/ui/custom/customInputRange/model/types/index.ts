import { ReactNode } from "react";

export interface CustomInputRangeProps {
    onChange?: (value: number[]) => void;
    title?: string;
    min?: number;
    max?: number;
    changedMin?: number;
    changedMax?: number;
    unit?: string | ReactNode;
    value?: number[];
}
