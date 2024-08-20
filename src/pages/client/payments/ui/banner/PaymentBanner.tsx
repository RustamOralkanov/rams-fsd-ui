import { Button, Col, Flex, Image, Row, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui";
import { IPaymentBanner } from "../../model/payments.model";

import "./PaymentBanner.scss";

const { Title, Text } = Typography;

export const PaymentBanner: React.FC<IPaymentBanner> = ({ is_button = true, is_text = true, is_additional = false }) => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={is_additional ? 16 : 24}>
                        <Flex className="payment-banner" align="center">
                            <Flex className="payment-banner-image">
                                <Image
                                    src={"https://ramsqz.com/storage/pages/mortgages/main_banner_9da4ef66a0a0969ae0fb737a46c46075.png"}
                                    preview={false}
                                    height={"100%"}
                                    width={"100%"}
                                    className="object-cover"
                                />
                            </Flex>
                            <Flex vertical className="payment-banner-wrapper" gap={30}>
                                {is_text && (
                                    <Title level={1} style={{ color: Colors.white }}>
                                        Максимально выгодные программы ипотеки
                                    </Title>
                                )}
                                {is_button && (
                                    <Button type="primary" style={{ width: "fit-content" }}>
                                        Оставить заявку
                                    </Button>
                                )}
                            </Flex>
                        </Flex>
                    </Col>
                    {is_additional && (
                        <Col xl={8}>
                            <Flex vertical className="bg-green-400 border-radius-l padding-40 height-full" justify="space-between">
                                <Title level={4} className="color-white">
                                    Trade-in
                                </Title>
                                <Flex vertical>
                                    <Text className="color-white">
                                        Вы давно осознали, что пора расстаться с грузом прошлого и впустить в свою жизнь новую энергию? С программой Trade-In от Rams Qazaqstan вы
                                        сможете улучшить условия и качество жизни. Меняйте старую квартиру на новую на привлекательных условиях и наслаждайтесь комфортом и уютом!
                                    </Text>
                                </Flex>
                            </Flex>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};
