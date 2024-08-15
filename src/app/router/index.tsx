import { createBrowserRouter } from "react-router-dom";
import { BreadcrumbsLayout, MainLayout } from "../layouts/home";
import { APP_ROUTES } from "../constants/router";
import { HomePage } from "../../pages/client/home";
import { Complexes } from "../../features/complexes";
import { ComplexPage } from "../../pages/client/complex";
import { FlatsPage } from "../../pages/client/flats";
import { FlatPage } from "../../pages/client/flat";

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
