export interface FlatsFilters {
    success: boolean;
    message: string;
    data: FlatsFiltersData;
}

export interface FlatsFiltersData {
    sizes: number[];
    prices: number[];
    count: number;
    rooms: Room[];
    property_types: Propertytype[];
    complexes: Complex[];
    complex_classes: ComplexClass[];
}

interface ComplexClass {
    id: number;
    icon?: string;
    name: string;
}

interface Complex {
    id: number;
    alias: string;
    name: string;
}

interface Propertytype {
    id: number;
    alias: string;
    name: string;
    name_plural: string;
}

interface Room {
    label: string;
    value: string;
}
