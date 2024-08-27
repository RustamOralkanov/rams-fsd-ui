import { Button, Col, Flex, Row, Typography } from "antd";
import { PhoneInIcon } from "@/shared/icons";
import { Colors } from "@/shared/types/Colors";
import { Container } from "@/shared/ui";

const { Text, Title } = Typography;

export const FMSAbout = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={8}>
                        <Flex vertical justify="space-between" className="padding-40 border-radius-l" style={{ backgroundColor: Colors.statusError500 }} gap={55}>
                            <Title level={5} className="color-white">
                                Если у вас аварийная ситуация рекомендуем позвонить в Контакт центр
                            </Title>
                            <a href="tel:+7 707 469 4444">
                                <Button className="solid-white-button width-fit">
                                    <PhoneInIcon />
                                    <Title level={5} style={{ color: Colors.statusError500 }}>
                                        +7 707 469 4444
                                    </Title>
                                </Button>
                            </a>
                        </Flex>
                    </Col>
                    <Col xl={16}>
                        <Flex
                            vertical
                            justify="space-between"
                            className="padding-40 border-radius-l height-full"
                            style={{ background: "linear-gradient(204.97deg, #4C9FAF 15.89%, #337D8B 111.26%)" }}
                        >
                            <Title level={3} className="color-white">
                                О нашей компании
                            </Title>
                            <Text className="color-white">
                                Нашей целью является поддержание высочайшего уровня качества, комфорта и безопасности в вашем ЖК. Мы действуем надежно и своевременно, решая
                                многообразные задачи: от охраны территории до уборки общих пространств и технического обслуживания инженерных систем. Мы также берем на себя решение
                                юридических, бухгалтерских и организационных вопросов
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
