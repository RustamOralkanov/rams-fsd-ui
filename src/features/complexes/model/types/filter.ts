export interface ComplexesFilters {
    success: boolean;
    message: string;
    data: ComplexesFilter;
}

export interface ComplexesFilter {
    rooms: Room[];
    sizes: number[];
    prices: number[];
    counts: number;
    classes: Class[];
    start_sale: boolean;
    is_discount: boolean;
}

export interface ComplexesFilterProps {
    rooms?: string;
}

interface Class {
    id: number;
    icon: string;
    name: string;
}
interface Room {
    label: string;
    value: string;
}
