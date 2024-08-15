import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const useFooter = () => {
    const location = useLocation();
    const { id } = useParams<{ id: string }>();
    const [active, set_active] = useState<boolean>(false);

    useEffect(() => {
        if (location.pathname.includes(`/flats/${id}`)) {
            set_active(true);
        } else {
            set_active(false);
        }
    }, [location, id]);

    return {
        active,
    };
};
