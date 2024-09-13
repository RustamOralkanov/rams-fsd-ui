import { ReactNode } from "react";

export interface CustomInputRangeProps {
    onChange?: (value: number[]) => void;
    title?: string;
    min?: number;
    max?: number;
    unit?: string | ReactNode;
    value?: [number, number];
}
