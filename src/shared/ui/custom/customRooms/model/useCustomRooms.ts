import { useState } from "react";

export const useCustomRooms = (onChange: (value: number[]) => void) => {
    const [flats, set_flats] = useState<number[]>([1]);

    const handleFlats = (value: number) => {
        let newFlats;
        if (!flats.includes(value)) {
            newFlats = [...flats, value];
        } else {
            newFlats = flats.filter((flat) => flat !== value);
        }
        set_flats(newFlats);
        onChange(newFlats);
    };

    return {
        flats,
        handleFlats,
    };
};
