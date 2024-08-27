import { Button, Col, Flex, Row, Typography, Image } from "antd";
import { PhoneIcon } from "@/shared/icons";
import { Banner, Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const MediaBanner = () => {
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
                        <Flex vertical justify="space-between" className="bg-gray-50 border-radius-l padding-40 height-full">
                            <Flex gap={20} align="center">
                                <Image src="https://ramsqz.com/storage/pages/post_sell/director_icon_7c2bc3d115cf8c7a2163c9eb5403f472.svg" preview={false} width={50} />
                                <Flex vertical>
                                    <Title level={4}>Данияр Каримжанов</Title>
                                    <Text className="color-gray-500">Директор департамента</Text>
                                </Flex>
                            </Flex>
                            <Text>
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                                sociosqu
                            </Text>
                            <Button type="primary">
                                <Flex align="center" gap={7}>
                                    <PhoneIcon className="color-gold-500" />
                                    +7 707 550 55 89
                                </Flex>
                            </Button>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
