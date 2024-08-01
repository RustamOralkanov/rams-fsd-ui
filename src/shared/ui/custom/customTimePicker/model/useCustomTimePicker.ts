import { useRef, useState } from "react";
import { MouseEvent, TouchEvent } from "react";
import { createTimeIntervals } from "./createTime";

export const useCustomTimePicker = (onChange?: (value: string | number) => void) => {
    const [current_time, set_current_time] = useState<string>("");
    const times = createTimeIntervals(9, 19, 30);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            isDragging.current = true;
            startX.current = e.pageX - containerRef.current.offsetLeft;
            scrollLeft.current = containerRef.current.scrollLeft;
            containerRef.current.classList.add("dragging");
        }
    };

    const onMouseLeave = () => {
        if (isDragging.current) {
            isDragging.current = false;
            if (containerRef.current) {
                containerRef.current.classList.remove("dragging");
            }
        }
    };

    const onMouseUp = () => {
        if (isDragging.current) {
            isDragging.current = false;
            if (containerRef.current) {
                containerRef.current.classList.remove("dragging");
            }
        }
    };

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (isDragging.current && containerRef.current) {
            const x = e.pageX - containerRef.current.offsetLeft;
            const walk = (x - startX.current) * 1;
            containerRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    const onTouchStart = (e: TouchEvent) => {
        if (containerRef.current) {
            isDragging.current = true;
            startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
            scrollLeft.current = containerRef.current.scrollLeft;
            containerRef.current.classList.add("dragging");
        }
    };

    const onTouchMove = (e: TouchEvent) => {
        if (isDragging.current && containerRef.current) {
            const x = e.touches[0].pageX - containerRef.current.offsetLeft;
            const walk = (x - startX.current) * 1;
            containerRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    const onTouchEnd = () => {
        if (isDragging.current) {
            isDragging.current = false;
            if (containerRef.current) {
                containerRef.current.classList.remove("dragging");
            }
        }
    };

    const handleOnChange = (value: string) => {
        set_current_time(value);
        if (onChange) {
            onChange(value);
        }
    };

    return {
        times,
        containerRef,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onMouseMove,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        current_time,
        set_current_time,
        handleOnChange,
    };
};
