import { Col, Flex, Row, Typography } from "antd";
import { ComplexCard } from "@/features/complexes";
import { Container } from "@/shared/ui";

const { Title } = Typography;

export const PartnersComplexes = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title>Наши объекты</Title>
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
