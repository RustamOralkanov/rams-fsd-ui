import { CarouselRef } from "antd/es/carousel";
import { RefObject, useRef } from "react";

export const useBanners = () => {
    const carouselRef: RefObject<CarouselRef> = useRef(null);

    const prevSlide = () => {
        carouselRef.current?.prev();
    };

    const nextSlide = () => {
        carouselRef.current?.next();
    };
    return { carouselRef, prevSlide, nextSlide };
};
