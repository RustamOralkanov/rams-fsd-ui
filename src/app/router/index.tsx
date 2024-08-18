import { createBrowserRouter } from "react-router-dom";
import { Complexes } from "../../features/complexes";
import { ComplexPage } from "../../pages/client/complex";
import { FlatPage } from "../../pages/client/flat";
import { FlatsPage } from "../../pages/client/flats";
import { HomePage } from "../../pages/client/home";
import { InstallmentPage, MortgagePage } from "../../pages/client/payments";
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
                        children: [
                            {
                                index: true,
                                element: <FlatsPage />,
                            },
                        ],
                    },
                    {
                        path: APP_ROUTES.MORTGAGE,
                        children: [
                            {
                                index: true,
                                element: <MortgagePage />,
                            },
                        ],
                    },
                    {
                        path: APP_ROUTES.INSTALLMENT,
                        children: [
                            {
                                index: true,
                                element: <InstallmentPage />,
                            },
                        ],
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
