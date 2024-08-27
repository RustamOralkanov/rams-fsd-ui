import Logo from "@assets/icons/logo.svg";
import { APP_ROUTES } from "../../../app/constants/router";
import { AutoTradeInIcon, InstallmentIcon, MortgageIcon, TradeInIcon } from "../../../shared/icons";
import { Colors } from "../../../shared/types/Colors";
import { HeaderData } from "./header.model";

export const headerData: HeaderData = {
    logo: Logo,
    pages: [
        {
            title: "Проекты",
            path: "/" + APP_ROUTES.COMPLEXES,
        },
        {
            key: "payments",
            title: "Способ покупки",
            path: "/" + APP_ROUTES.MORTGAGE,
            children: [
                {
                    icon: <MortgageIcon />,
                    title: "Ипотека",
                    text: "от 12% годовых",
                    path: "/" + APP_ROUTES.MORTGAGE,
                },
                {
                    icon: <InstallmentIcon />,
                    title: "Рассрочка",
                    text: "0-0-24",
                    path: "/" + APP_ROUTES.INSTALLMENT,
                },
                {
                    icon: <TradeInIcon />,
                    title: "Trade-in",
                    text: "экономия сил и времени",
                    path: "/" + APP_ROUTES.TRADE_IN,
                },
                {
                    icon: <AutoTradeInIcon />,
                    title: "Авто trade-in",
                    text: "за 5 шагов",
                    path: "/" + APP_ROUTES.AUTO_TRADE_IN,
                },
            ],
        },
        {
            title: "Новости и акции",
            path: "/" + APP_ROUTES.NEWS,
        },
        {
            key: "about",
            title: "Компания",
            path: "/" + APP_ROUTES.ABOUT,
            children: [
                {
                    title: "Устойчивое развитие",
                    text: "от 12% годовых",
                    color: Colors.statusError400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.DEVELOPMENT,
                },
                {
                    title: "Партнерам",
                    text: "0-0-24",
                    color: Colors.warning400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.PARTNERS,
                },
                {
                    title: "Отдел постпродажной поддержки",
                    text: "экономия сил и времени",
                    color: Colors.statusSuccess400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.SUPPORT,
                },
                {
                    title: "Карьера",
                    text: "за 5 шагов",
                    color: Colors.statusError400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.CAREER,
                },
                {
                    title: "Контакты",
                    text: "за 5 шагов",
                    color: Colors.statusError400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.CONTACTS,
                },
                {
                    title: "СМИ",
                    text: "за 5 шагов",
                    color: Colors.statusError400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.MEDIA,
                },
                {
                    title: "RAMS FMS",
                    text: "за 5 шагов",
                    color: Colors.statusError400,
                    path: "/" + APP_ROUTES.ABOUT + "/" + APP_ROUTES.FMS,
                },
            ],
        },
        {
            title: "Коммерческие помещения",
            path: "/",
        },
        {
            title: "Чистовая отделка",
            path: "/" + APP_ROUTES.FACING,
        },
        {
            title: "Партнерам",
            path: "/" + APP_ROUTES.PARTNERS,
        },
        {
            title: "RAMS FMS",
            path: "/" + APP_ROUTES.FMS,
        },
    ],
    phone: "8 727 222-44-44",
};
