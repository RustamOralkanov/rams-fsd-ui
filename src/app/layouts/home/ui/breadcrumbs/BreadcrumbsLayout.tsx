import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

export const BreadcrumbsLayout = () => {
    return (
        <Flex vertical gap={30}>
            <Breadcrumbs />
            <Outlet />
        </Flex>
    );
};
