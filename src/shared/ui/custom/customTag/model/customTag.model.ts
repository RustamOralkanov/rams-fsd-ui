import { CSSProperties } from "react";

export interface ICustomTag {
    text: string;
    type?: "default" | "sale" | "installment" | "title";
    style?: CSSProperties;
    className?: string;
}
