import { Col, Row, Flex, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { Container } from "../../../shared/ui/container";
import { DiscountsCarousel } from "../../discounts";
import { NewsCard } from "./NewsCard";

const { Title } = Typography;

export const NewsList = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Flex align="center" justify="space-between">
                        <Title>Новости и акции</Title>
                        <Link to={"/" + APP_ROUTES.NEWS}>
                            <Button>Все новости и акции</Button>
                        </Link>
                    </Flex>
                    <Row gutter={[20, 20]}>
                        <Col xxl={8} xl={8}>
                            <DiscountsCarousel />
                        </Col>
                        <Col xxl={16} xl={16}>
                            <Row gutter={[20, 20]}>
                                {[...Array(3)].map((_, index) => (
                                    <Col xxl={8} xl={8} key={index}>
                                        <NewsCard />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
