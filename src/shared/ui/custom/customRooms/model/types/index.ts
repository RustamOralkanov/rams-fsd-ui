export interface CustomRoomsPropsValue {
    label: string;
    value: string;
}

export interface CustomRoomsProps {
    onChange?: (value: string) => void;
    is_title?: boolean;
    rooms: {
        label: string;
        value: string;
    }[];
    value?: CustomRoomsPropsValue[];
}
