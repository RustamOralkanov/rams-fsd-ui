import { ReactNode } from "react";
import { Colors } from "@/shared/types/Colors";

interface ChildPage {
    title: string;
    text?: string;
    color?: Colors;
    path: string;
    icon?: ReactNode;
}

interface Page {
    key?: string;
    title: string;
    path: string;
    children?: ChildPage[];
}

export interface HeaderData {
    logo: string;
    pages: Page[];
    phone: string;
}
