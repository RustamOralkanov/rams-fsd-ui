import { Col, Flex, Row, Switch, Typography } from "antd";
import { Consultation } from "@/entities/consultation";
import { Container } from "@/shared/ui/container";
import { CompareCard } from "./card/CompareCard";

const { Text } = Typography;

export const ComparePage = () => {
    return (
        <Flex vertical gap={80}>
            <section>
                <Container>
                    <Flex vertical gap={30}>
                        <Flex align="center" gap={8}>
                            <Switch />
                            <Text>Убрать одинаковые параметры</Text>
                        </Flex>
                        <Row gutter={[20, 20]}>
                            {[...Array(4)].map((_, index) => (
                                <Col xl={6} key={index}>
                                    <CompareCard />
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                </Container>
            </section>
            <Consultation />
        </Flex>
    );
};
