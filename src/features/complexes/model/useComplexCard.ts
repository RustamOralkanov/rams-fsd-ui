import { CarouselRef } from "antd/es/carousel";
import { RefObject, useRef, useState } from "react";

export const useComplexCard = () => {
    const [height, set_height] = useState<number>(357);
    const carouselRef: RefObject<CarouselRef> = useRef(null);

    return {
        height,
        set_height,
        carouselRef,
    };
};
