import { APP_ROUTES } from "../../../constants/router";

export const useBreadcrumbs = (pathname: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbNameMap: Record<string, string> = {
        [APP_ROUTES.COMPLEXES.replace("/", "")]: "Комплексы",
    };

    const breadcrumbs = pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const name = breadcrumbNameMap[segment] || segment;

        return {
            name,
            path,
            isLast,
        };
    });

    breadcrumbs.unshift({
        name: "Главная",
        path: APP_ROUTES.HOME,
        isLast: false,
    });

    return breadcrumbs;
};
