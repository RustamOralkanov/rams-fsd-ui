import { Button, Col, Flex, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { NewsCard } from "@/entities/news";
import { Container } from "@/shared/ui";

const { Title } = Typography;

export const FMSNews = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Flex align="center" justify="space-between">
                        <Title level={2}>Новости для жителей</Title>
                        <Link to={"/" + APP_ROUTES.NEWS}>
                            <Button>Все новости</Button>
                        </Link>
                    </Flex>
                    <Row gutter={[20, 20]}>
                        {[...Array(3)].map((_, index) => (
                            <Col span={8} key={index}>
                                <NewsCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
