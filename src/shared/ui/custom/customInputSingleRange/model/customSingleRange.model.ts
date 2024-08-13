export interface ICustomSingleRange {
    onChange?: (value: number) => void;
    title?: string;
    is_percent?: boolean;
    is_price?: boolean;
    is_year?: boolean;
    max?: number;
    min?: number;
}
