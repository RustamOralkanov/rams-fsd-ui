import { useState } from "react";
import { headerData } from "./headerData";

export const useHeader = () => {
    const [links_count, set_links_count] = useState([0, 4]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const showAllLinks = () => set_links_count([4, headerData.pages.length]);
    const resetLinks = () => set_links_count([0, 4]);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return { links_count, showAllLinks, resetLinks, isOverlayOpen, openOverlay, closeOverlay };
};
