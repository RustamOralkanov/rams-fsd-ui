import { Flex, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../../../../shared/ui/container";
import "./Breadcrumbs.scss";
import { useBreadcrumbs } from "../../model/useBreadcrumbs";

const { Title } = Typography;

export const Breadcrumbs = () => {
    const location = useLocation();
    const breadcrumbs = useBreadcrumbs(location.pathname);

    return (
        <nav className="breadcrumbs">
            <Container>
                <Flex vertical gap={10}>
                    <Flex gap={5} align="center">
                        {breadcrumbs.map((breadcrumb, index) =>
                            breadcrumb.isLast ? (
                                <span key={index} className="breadcrumbs-item">
                                    {breadcrumb.name}
                                </span>
                            ) : (
                                <Link key={index} to={breadcrumb.path} className="breadcrumbs-item">
                                    {breadcrumb.name}
                                </Link>
                            )
                        )}
                    </Flex>
                    <Title level={2}>Название проекта</Title>
                </Flex>
            </Container>
        </nav>
    );
};
