import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { Flex } from "antd";

export const BreadcrumbsLayout = () => {
    return (
        <Flex vertical gap={30}>
            <Breadcrumbs />
            <Outlet />
        </Flex>
    );
};
