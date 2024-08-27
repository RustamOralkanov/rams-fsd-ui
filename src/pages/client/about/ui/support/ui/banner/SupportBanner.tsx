import { Button, Col, Flex, Row, Typography, Image } from "antd";
import { Banner, Container } from "@/shared/ui";

const { Text, Title } = Typography;

export const SupportBanner = () => {
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
                        <Flex vertical justify="space-between" className="padding-40 border-radius-l bg-gray-50 height-full">
                            <Flex gap={20} align="center">
                                <Image src="https://ramsqz.com/storage/pages/post_sell/director_icon_7c2bc3d115cf8c7a2163c9eb5403f472.svg" preview={false} width={50} />
                                <Flex vertical>
                                    <Title level={4}>Булат Утельбеков</Title>
                                    <Text className="color-gray-500">Руководитель</Text>
                                </Flex>
                            </Flex>
                            <Text>
                                Меня зовут Булат Утельбеков. Я являюсь руководителем Отдела постпродажной поддержки и несу ответственность за передачу квартиры новоселам. Моя цель
                                - радость каждого клиента после обращения к нам.
                            </Text>
                            <Button type="primary">Напишите нам</Button>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
