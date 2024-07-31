export type OnChangeType = (value: string | number) => void;

export interface ICustomSelect {
    onChange?: OnChangeType;
    options?: Option[];
    placeholder?: string;
}

interface Option {
    label: string;
    value: string | number;
}
