import { IFlatsFilterValues } from "../flatsFilter.model";

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
    property_types: PropertyType[];
    complexes: Complex[];
    complex_classes: ComplexClass[];
    cities: Cities[];
    check_in_dates: CheckInDates[];
    property_facings: Facing[];
}

export interface FlatsTypes {
    success: boolean;
    message: string;
    data: PropertyType[];
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

interface Cities {
    id: number;
    name: string;
}

interface CheckInDates {
    id: number;
    name: string;
}

interface Facing {
    id: number;
    name: string;
}

export interface PropertyType {
    id: number;
    alias: string;
    name: string;
    name_plural: string;
    properties_count: number;
}

interface Room {
    label: string;
    value: string;
}

export interface FlatsFilterValues {
    property_type_id: number;
}

export interface FlatsFilterProps {
    type_id: number;
    onFilterChange: (values: IFlatsFilterValues) => void;
}
