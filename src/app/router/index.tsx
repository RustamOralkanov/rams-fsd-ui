import { createBrowserRouter } from "react-router-dom";
import { Complexes } from "../../features/complexes";
import { ComplexPage } from "../../pages/client/complex";
import { FacingPage } from "../../pages/client/facing";
import { FavoritesPage } from "../../pages/client/favorites";
import { FlatPage } from "../../pages/client/flat";
import { FlatsPage } from "../../pages/client/flats";
import { HomePage } from "../../pages/client/home";
import { PartnersPage } from "../../pages/client/partners";
import { AutoTradeInPage, InstallmentPage, MortgagePage, TradeInPage } from "../../pages/client/payments";
import { APP_ROUTES } from "../constants/router";
import { BreadcrumbsLayout, MainLayout } from "../layouts/home";

const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                element: <BreadcrumbsLayout />,
                children: [
                    {
                        path: APP_ROUTES.COMPLEXES,
                        children: [
                            {
                                index: true,
                                element: <Complexes />,
                            },
                            {
                                path: ":alias",
                                element: <ComplexPage />,
                            },
                        ],
                    },
                    {
                        path: APP_ROUTES.FLATS,
                        children: [{ index: true, element: <FlatsPage /> }],
                    },
                    {
                        path: APP_ROUTES.MORTGAGE,
                        children: [{ index: true, element: <MortgagePage /> }],
                    },
                    {
                        path: APP_ROUTES.INSTALLMENT,
                        children: [{ index: true, element: <InstallmentPage /> }],
                    },
                    {
                        path: APP_ROUTES.TRADE_IN,
                        children: [{ index: true, element: <TradeInPage /> }],
                    },
                    {
                        path: APP_ROUTES.AUTO_TRADE_IN,
                        children: [{ index: true, element: <AutoTradeInPage /> }],
                    },
                    {
                        path: APP_ROUTES.FAVORITES,
                        children: [{ index: true, element: <FavoritesPage /> }],
                    },
                    {
                        path: APP_ROUTES.FACING,
                        children: [{ index: true, element: <FacingPage /> }],
                    },
                    {
                        path: APP_ROUTES.PARTNERS,
                        children: [{ index: true, element: <PartnersPage /> }],
                    },
                ],
            },
            {
                path: APP_ROUTES.FLATS,
                children: [
                    {
                        path: ":id",
                        element: <FlatPage />,
                    },
                ],
            },
        ],
    },
]);

export default router;
