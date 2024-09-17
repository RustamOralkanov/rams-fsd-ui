export interface Complexes {
    success: boolean;
    message: string;
    data: Complex[];
}

export interface Complex {
    id: number;
    order: number;
    is_custom: boolean;
    alias: string;
    year_build: number;
    quarter: number;
    check_in_date: string;
    complex_class: string;
    city_id: string;
    is_primary: boolean;
    coordinates: string;
    map_link: string;
    start_sale: boolean;
    name: string;
    title: string;
    description: string;
    address: string;
    total_count: number;
    options: {
        price: number;
        rooms: number;
        size: number;
    }[];
    images: Image[];
}

interface Image {
    id: number;
    order: number;
    url: string;
}

export interface ComplexParams {
    status?: string;
    rooms?: string;
    price?: number[];
    size?: number[];
    start_sale?: boolean;
    is_discount?: boolean;
    is_class_2?: boolean;
    is_class_3?: boolean;
    is_class_4?: boolean;
}
