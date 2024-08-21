import { useState, MouseEvent } from "react";
import { headerData } from "./headerData";

export const useHeader = () => {
    const [links_count, set_links_count] = useState([0, 4]);
    const [is_overlay_open, set_is_overlay_open] = useState(false);
    const [current_button, set_current_button] = useState<string | null>(null);

    const showAllLinks = () => set_links_count([4, headerData.pages.length]);
    const resetLinks = () => set_links_count([0, 4]);

    const openOverlay = () => {
        set_is_overlay_open(true);
    };

    const closeOverlay = () => {
        set_is_overlay_open(false);
        set_current_button(null);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
        const boundingRect = e.currentTarget.getBoundingClientRect();
        if (
            e.clientX < boundingRect.left || // Left
            e.clientX > boundingRect.right || // Right
            e.clientY < boundingRect.top // Up
        ) {
            closeOverlay();
        }
    };

    return { links_count, showAllLinks, resetLinks, is_overlay_open, openOverlay, closeOverlay, handleMouseLeave, current_button, set_current_button };
};
