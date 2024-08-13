import Logo from "../../../app/assets/icons/logo.svg";
import Layout from "../../../app/assets/icons/layout.svg";
import { APP_ROUTES } from "../../../app/constants/router";

export const headerData = {
    logo: Logo,
    pages: [
        {
            title: "Недвижимость",
            icon: Layout,
            path: "/",
        },
        {
            title: "Проекты",
            path: "/" + APP_ROUTES.COMPLEXES,
        },
        {
            title: "Отделка",
            path: "/",
        },
        {
            title: "Способ покупки",
            path: "/",
        },
        {
            title: "Компания",
            path: "/",
        },
    ],
    phone: "8 727 222-44-44",
};
