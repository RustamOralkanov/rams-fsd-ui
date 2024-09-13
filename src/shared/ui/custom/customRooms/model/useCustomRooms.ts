import { useState } from "react";
import { CustomRoomsProps } from "./types";

export const useCustomRooms = (props: CustomRoomsProps) => {
    const [selectedRooms, setSelectedRooms] = useState(props.rooms);

    const handleClick = (value: { label: string; value: string }) => {
        const isSelected = selectedRooms.some((room) => room.label === value.label);
        let newRooms;

        if (isSelected) {
            newRooms = selectedRooms.filter((room) => room.label !== value.label);
        } else {
            newRooms = [...selectedRooms, value];
        }

        setSelectedRooms(newRooms);

        const selectedValuesString = newRooms.map((room) => room.value).join(",");

        if (props.onChange) {
            props.onChange(selectedValuesString);
        }
    };

    return {
        selectedRooms,
        handleClick,
    };
};
