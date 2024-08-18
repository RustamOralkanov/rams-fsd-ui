import { Col, Flex, Form, Row, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { ClearButton, Container, CustomInputSingleRange, CustomSelectTags } from "../../../../../shared/ui";
import { PaymentMortgageCard } from "./card/PaymentMortgageCard";

const { Title, Text } = Typography;

export const PaymentMortgage = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Рассчитайте ипотеку</Title>
                    <Form name="mortgage">
                        <Row gutter={[20, 20]} align={"bottom"}>
                            <Col xl={6}>
                                <Form.Item>
                                    <CustomSelectTags />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item>
                                    <CustomInputSingleRange title="Стоимость недвижимости" is_price />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item>
                                    <CustomInputSingleRange title="Первоначальный взнос" is_percent />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item>
                                    <CustomInputSingleRange title="Срок" is_year />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Flex align="center" justify="space-between">
                                    <Text>
                                        Найдено <b style={{ color: Colors.green600 }}>12</b> вариантов
                                    </Text>
                                    <ClearButton />
                                </Flex>
                            </Col>
                        </Row>
                    </Form>
                    <Row gutter={[20, 20]}>
                        {[...Array(4)].map((_, index) => (
                            <Col span={24} key={index}>
                                <PaymentMortgageCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
