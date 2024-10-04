export interface IPaymentsFeaturesCard extends PartialItem {
    height?: number;
}

export interface IPaymentBanner extends PartialData {
    is_button?: boolean;
    is_text?: boolean;
    is_additional?: boolean;
}

export interface Payments {
    success: boolean;
    message: string;
    data: Data;
}

type PartialData = Partial<Data>;
type PartialItem = Partial<Item>;

export interface Data {
    id: number;
    slug: string;
    items: Item[];
    title: string;
    banner_text: string;
    buttonText: string;
    banner_img: string;
}

export interface Item {
    id: number;
    order: number;
    date: null;
    complex_id: null;
    alias: null;
    is_mobile: null;
    type: null;
    icon: string;
    title: string;
    description: null;
}
