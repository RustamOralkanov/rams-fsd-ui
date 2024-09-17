export interface CustomRoomsPropsValue {
    label: string;
    value: string;
}

export interface CustomRoomsProps {
    onChange?: (value: CustomRoomsPropsValue[]) => void;
    is_title?: boolean;
    rooms: {
        label: string;
        value: string;
    }[];
    value?: CustomRoomsPropsValue[];
}
