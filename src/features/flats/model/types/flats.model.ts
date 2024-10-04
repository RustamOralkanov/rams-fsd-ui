export interface Flats {
    success: boolean;
    message: string;
    data: FlatsData;
}
export interface FlatsData {
    current_page: number;
    data: FlatsItems[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}
interface Link {
    url?: string;
    label: string;
    active: boolean;
}
export interface FlatsItems {
    id: number;
    plan_photo: string;
    rooms: number;
    size: number;
    floor: number;
    build_name: string;
    price: number;
    number: string;
    phase: number;
    property_facing: string;
    watched: number;
    complex_name: string;
    year_build: number;
    quarter: number;
    complex_class: string;
    property_type_id: number;
}

export type PartialFlatsItem = Partial<FlatsItems>;
