import { Col, Flex, Row, Typography } from "antd";
import { Container } from "../../../../../shared/ui/container";
import { Colors } from "../../../../../shared/types/Colors";
import { ComplexProgressCard } from "./ComplexProgressCard";

const { Title, Text } = Typography;

export const ComplexProgress = () => {
    return (
        <section>
            <Container>
                <Flex gap={40} vertical>
                    <Flex align="flex-end" justify="space-between">
                        <Title level={2}>Ход строительства</Title>
                        <Flex>
                            <Text style={{ color: Colors.gray500 }}>
                                Ближайшая дата заселения <strong style={{ color: Colors.gray900 }}>25 июня 2025</strong>
                            </Text>
                        </Flex>
                    </Flex>
                    <Row gutter={[20, 20]}>
                        {[...Array(4)].map((_, index) => (
                            <Col xxl={6} xl={6} key={index}>
                                <ComplexProgressCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
