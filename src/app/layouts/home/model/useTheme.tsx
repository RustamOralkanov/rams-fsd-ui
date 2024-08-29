import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Colors } from "../../../../shared/types/Colors";

export const useTheme = () => {
    const { id } = useParams<{ id: string }>();
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    useEffect(() => {
        if (pathname.includes(`/flats/${id}`)) {
            document.body.style.transition = "background-color 0.5s ease-in-out";
            document.body.style.backgroundColor = Colors.gray;
        } else {
            document.body.style.transition = "";
            document.body.style.backgroundColor = "";
        }
    }, [pathname, id]);
};
