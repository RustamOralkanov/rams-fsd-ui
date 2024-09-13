export interface CustomRoomsProps {
    onChange?: (value: string) => void;
    is_title?: boolean;
    rooms: {
        label: string;
        value: string;
    }[];
    value?: {
        label: string;
        value: string;
    }[];
}
