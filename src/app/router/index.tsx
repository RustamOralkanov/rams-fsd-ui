import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/404";
import { AboutPage, ContactsPage, DevelopmentPage, FMSPage, MediaPage, PartnersPage, SupportPage } from "@/pages/client/about";
import { CareerPage } from "@/pages/client/about/ui/career";
import { ComparePage } from "@/pages/client/compare";
import { ComplexPage } from "@/pages/client/complex";
import { FacingPage } from "@/pages/client/facing";
import { FavoritesPage } from "@/pages/client/favorites";
import { FlatPage } from "@/pages/client/flat";
import { FlatsPage } from "@/pages/client/flats";
import { HomePage } from "@/pages/client/home";
import { NewsDetailsPage, NewsPage } from "@/pages/client/news";
import { AutoTradeInPage, InstallmentPage, MortgagePage, TradeInPage } from "@/pages/client/payments";
import { Complexes } from "@/features/complexes";
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
                        children: [
                            { index: true, element: <FavoritesPage /> },
                            { path: APP_ROUTES.COMPARE, element: <ComparePage /> },
                        ],
                    },
                    {
                        path: APP_ROUTES.FACING,
                        children: [{ index: true, element: <FacingPage /> }],
                    },
                    {
                        path: APP_ROUTES.ABOUT,
                        children: [
                            { index: true, element: <AboutPage /> },
                            { path: APP_ROUTES.FMS, element: <FMSPage /> },
                            { path: APP_ROUTES.CAREER, element: <CareerPage /> },
                            { path: APP_ROUTES.CONTACTS, element: <ContactsPage /> },
                            { path: APP_ROUTES.SUPPORT, element: <SupportPage /> },
                            { path: APP_ROUTES.PARTNERS, element: <PartnersPage /> },
                            { path: APP_ROUTES.MEDIA, element: <MediaPage /> },
                            { path: APP_ROUTES.DEVELOPMENT, element: <DevelopmentPage /> },
                        ],
                    },
                    {
                        path: APP_ROUTES.NEWS,
                        children: [
                            {
                                index: true,
                                element: <NewsPage />,
                            },

                            {
                                path: ":alias",
                                element: <NewsDetailsPage />,
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
    {
        path: "*", // Все несуществующие маршруты
        element: <NotFoundPage />, // Используем MainLayout
    },
]);

export default router;
