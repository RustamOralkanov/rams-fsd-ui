import { Col, Flex, Row, Typography } from "antd";
import { Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const AboutInfo = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={6}>
                        <Flex vertical gap={30}>
                            <Title level={2}>Видение</Title>
                            <Text className="color-gray-500">
                                Стать международной девелоперской компанией, задающей стандарты высокого качества в строительстве и новый уровень комфорта.
                            </Text>
                        </Flex>
                    </Col>
                    <Col xl={{ span: 12, offset: 6 }}>
                        <Flex vertical gap={30}>
                            <Title level={2}>Миссия</Title>
                            <Text className="color-gray-500">
                                Применяя инновационные технологии и высочайшее мастерство, строим превосходные пространства для счастливой жизни. Пстоянно совершенствуя
                                профессионализм нашей команды и партнеров, развиваем компанию, в которой хочется работать. Преображаем архитектуру города, пишем его новую историю и
                                хотим с гордостью передать его будущим поколениям.
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
