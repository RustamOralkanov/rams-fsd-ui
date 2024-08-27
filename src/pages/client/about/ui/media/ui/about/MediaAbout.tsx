import { Col, Flex, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { MediaCard } from "../card/MediaCard";

const { Title, Text } = Typography;

export const MediaAbout = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>СМИ о нас</Title>
                    <Row gutter={[20, 20]}>
                        {[...Array(6)].map((_, index) => (
                            <Col xl={8} key={index}>
                                <MediaCard />
                            </Col>
                        ))}
                    </Row>
                    <Flex justify="center">
                        <Text className="color-green-300 cursor-pointer">Показать еще</Text>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
