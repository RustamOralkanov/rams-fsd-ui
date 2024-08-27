import { Col, Flex, Row, Typography } from "antd";
import { Banner, Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const AboutBanner = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={16}>
                        <Banner>
                            <Title level={1} className="color-white">
                                Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Title>
                        </Banner>
                    </Col>
                    <Col xl={8}>
                        <Flex vertical gap={24} className="bg-green-300 border-radius-l padding-40 height-full" justify="center">
                            <Text className="color-white">
                                RAMS Qazaqstan входит в число лидеров строительного рынка страны и осуществляет деятельность с 1997 года. За 25 лет деятельности в Казахстане
                                компания воздвигла более 55 жилых, офисных и промышленных объектов.
                            </Text>
                            <Text className="color-white">
                                Более 2-х лет девелопер развивает собственные проекты на международном рынке Турции, ОАЭ и Таиланда. Применяя инновационные решения, передовые
                                технологии и международный опыт, RAMS Qazaqstan созидает лучшее для вас.
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
