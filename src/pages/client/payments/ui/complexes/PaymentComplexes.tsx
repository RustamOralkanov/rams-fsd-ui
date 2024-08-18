import { Col, Flex, Row, Typography } from "antd";
import { ComplexCard } from "../../../../../features/complexes/ui/card/ComplexCard";
import { Container } from "../../../../../shared/ui";

const { Title } = Typography;

export const PaymentComplexes = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Объекты которые доступны в ипотеку</Title>
                    <Row gutter={[20, 20]}>
                        {[...Array(3)].map((_, index) => (
                            <Col xl={8} key={index}>
                                <ComplexCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
