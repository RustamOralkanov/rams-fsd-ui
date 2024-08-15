import Logo from "../../../app/assets/icons/logo.svg";
import { APP_ROUTES } from "../../../app/constants/router";

export const headerData = {
    logo: Logo,
    pages: [
        {
            title: "Проекты",
            path: "/" + APP_ROUTES.COMPLEXES,
        },
        {
            title: "Способ покупки",
            path: "/",
        },
        {
            title: "Новости и акции",
            path: "/",
        },
        {
            title: "Компания",
            path: "/",
        },
        {
            title: "Коммерческие помещения",
            path: "/",
        },
        {
            title: "Чистовая отделка",
            path: "/",
        },
        {
            title: "Партнерам",
            path: "/",
        },
        {
            title: "RAMS FMS",
            path: "/",
        },
    ],
    phone: "8 727 222-44-44",
};
