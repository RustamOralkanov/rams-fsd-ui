import { useState } from "react";
import { headerData } from "./header.data";

export const useHeader = () => {
    const [links_count, set_links_count] = useState([0, 4]);
    const [active_properties, set_active_properties] = useState(false);

    const showAllLinks = () => set_links_count([4, headerData.pages.length]);
    const resetLinks = () => set_links_count([0, 4]);

    const onPropertiesEnter = () => {
        set_active_properties(true);
    };

    const onPropertiesLeave = () => {
        set_active_properties(false);
    };

    return { links_count, showAllLinks, resetLinks, active_properties, onPropertiesEnter, onPropertiesLeave };
};
