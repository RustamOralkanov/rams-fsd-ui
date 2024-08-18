import { Col, Flex, Row, Typography } from "antd";
import { Container } from "../../../../../shared/ui";
import { PaymentFeaturesCard } from "./PaymentFeaturesCard";

const { Title } = Typography;

export const PaymentFeatures = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Преимущества</Title>

                    <Row gutter={[20, 20]}>
                        {[...Array(3)].map((_, index) => (
                            <Col xl={8} key={index}>
                                <PaymentFeaturesCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
