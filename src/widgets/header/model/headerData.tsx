import Logo from "@assets/icons/logo.svg";
import { APP_ROUTES } from "../../../app/constants/router";
import { AutoTradeInIcon, InstallmentIcon, MortgageIcon, TradeInIcon } from "../../../shared/icons";
import { Colors } from "../../../shared/types/Colors";

export const headerData = {
    logo: Logo,
    pages: [
        {
            title: "Проекты",
            path: "/" + APP_ROUTES.COMPLEXES,
        },
        {
            title: "Способ покупки",
            path: "/" + APP_ROUTES.MORTGAGE,
            children: [
                {
                    icon: <MortgageIcon />,
                    title: "Ипотека",
                    text: "от 12% годовых",
                    color: Colors.statusError400,
                },
                {
                    icon: <InstallmentIcon />,
                    title: "Рассрочка",
                    text: "0-0-24",
                    color: Colors.statusError400,
                },
                {
                    icon: <TradeInIcon />,
                    title: "Trade-in",
                    text: "экономия сил и времени",
                    color: Colors.statusError400,
                },
                {
                    icon: <AutoTradeInIcon />,
                    title: "Авто trade-in",
                    text: "за 5 шагов",
                    color: Colors.statusError400,
                },
            ],
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
            path: "/" + APP_ROUTES.FACING,
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
