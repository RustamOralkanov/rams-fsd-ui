import { useState } from "react";
import { CustomRoomsProps, CustomRoomsPropsValue } from "./types";

export const useCustomRooms = (props: CustomRoomsProps) => {
    const [selectedRooms, setSelectedRooms] = useState<CustomRoomsPropsValue[]>([]);

    const handleRoom = (value: CustomRoomsPropsValue) => {
        const isSelected = selectedRooms.some((room) => room.label === value.label);

        let newRooms;

        if (isSelected) {
            newRooms = selectedRooms.filter((room) => room.label !== value.label);
        } else {
            newRooms = [...selectedRooms, value];
        }

        setSelectedRooms(newRooms);

        if (props.onChange) {
            props.onChange(newRooms);
        }
    };

    return {
        selectedRooms,
        handleRoom,
    };
};
