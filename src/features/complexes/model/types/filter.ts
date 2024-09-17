export interface ComplexesFilters {
    success: boolean;
    message: string;
    data: ComplexesFilter;
}

export interface ComplexesFilter {
    filters: {
        rooms: Room[];
        sizes: number[];
        prices: number[];
        counts: number;
        booleanFilters: {
            name: string;
            query: string;
        }[];
    };
    changedFilters: {
        rooms: Room[];
        sizes: number[];
        prices: number[];
        counts: number;
        booleanFilters: {
            name: string;
            query: string;
        }[];
    };
}

export interface ComplexesFilterProps {
    rooms?: string;
}

interface Room {
    label: string;
    value: string;
}
