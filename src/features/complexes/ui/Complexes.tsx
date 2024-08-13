import { Col, Row, Tabs, Flex } from "antd";
import { Container } from "../../../shared/ui/container";
import { ComplexCard } from "./card/ComplexCard";
import { ComplexFilter } from "./filter/ComplexFilter";
import { ComplexBanner } from "./banner/ComplexBanner";

export const Complexes = () => {
    return (
        <section>
            <Container>
                <Tabs
                    animated
                    items={[
                        {
                            key: "sales",
                            label: "В продаже",
                            children: (
                                <Flex vertical gap={40}>
                                    <ComplexFilter />
                                    <Row gutter={[20, 40]}>
                                        <Col xl={16}>
                                            <ComplexBanner />
                                        </Col>
                                        {[...Array(7)].map((_, index) => (
                                            <Col xl={8} key={index}>
                                                <ComplexCard />
                                            </Col>
                                        ))}
                                    </Row>
                                </Flex>
                            ),
                        },
                        {
                            key: "done",
                            label: "Построенные",
                            children: (
                                <Flex vertical gap={40}>
                                    <Row gutter={[20, 40]}>
                                        <Col xl={16}>
                                            <ComplexCard />
                                        </Col>
                                        {[...Array(7)].map((_, index) => (
                                            <Col xl={8} key={index}>
                                                <ComplexCard />
                                            </Col>
                                        ))}
                                    </Row>
                                </Flex>
                            ),
                        },
                    ]}
                />
            </Container>
        </section>
    );
};
