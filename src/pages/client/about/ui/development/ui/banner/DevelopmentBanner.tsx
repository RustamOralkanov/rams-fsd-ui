import { Image, Col, Flex, Row, Typography } from "antd";
import { Banner, Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const DevelopmentBanner = () => {
    return (
        <Container>
            <Row gutter={[20, 20]}>
                <Col xl={16}>
                    <Banner src="https://ramsqz.com/images/banner.jpg?53848da902253fb094f642d9671935a8">
                        <Flex vertical gap={20}>
                            <Title level={1} className="color-white">
                                Цели в области устойчивого развития
                            </Title>
                            <Text className="color-white">
                                Мы нацелены на долгосрочный рост с соблюдением высоких социальных и экологических стандартов, что является основой нашей стратегией.
                            </Text>
                        </Flex>
                    </Banner>
                </Col>
                <Col xl={8}>
                    <Flex vertical className="bg-gray-50 border-radius-l padding-40 height-full" justify="space-between">
                        <Image src="https://ramsqz.com/images/text-stable-development.svg?bb6883c9015c2102931082ed0c04c483" preview={false} width={150} />
                        <Text className="color-gray-900">
                            Мы нацелены на долгосрочный рост с соблюдением высоких социальных и экологических стандартов, что является основой нашей стратегией. Объекты компании
                            RAMS строятся с учетом местных особенностей и культурных ценностей страны, в которой реализуется проект. Пространства объектов RAMS - это всегда
                            безопасная и здоровая среда.
                        </Text>
                    </Flex>
                </Col>
            </Row>
        </Container>
    );
};
