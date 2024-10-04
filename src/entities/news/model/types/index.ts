export interface NewsDiscounts {
    success: boolean;
    message: string;
    data: NewsDiscountsData;
}
export interface AllNewsDiscounts {
    success: boolean;
    message: string;
    data: NewsDicountsItem[];
}

export interface NewsDiscountsData {
    id: number;
    slug: string;
    items: NewsDicountsItem[];
    title: string;
}
export interface NewsDicountsItem {
    id: number;
    order: number;
    date: string;
    complex_id: number;
    alias: string;
    is_mobile?: boolean;
    type: string;
    files: string[];
    title: string;
    content: string;
    coverImg: string;
    subtitle?: string;
}

export interface SingleNewsDicounts {
    success: boolean;
    message: string;
    data: NewsDicountsItem;
}

export type PartialNewsDicountsItem = Partial<NewsDicountsItem>;

export interface NewsDicountsParams {
    type?: "discount" | "news" | "";
    id?: number;
}
