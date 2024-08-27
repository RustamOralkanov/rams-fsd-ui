import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { aboutFeatures } from "../../../model/about.data";

const { Text, Title } = Typography;

export const AboutFeatures = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    {aboutFeatures.map((feature) => (
                        <Col xl={6} key={feature.id}>
                            <Flex vertical justify="space-between" className="bg-gray-50 border-radius-m padding-40" style={{ height: 291 }}>
                                <Flex justify="center" align="center" className="width-50 border-radius-circle bg-white">
                                    <Image src={feature.icon} preview={false} />
                                </Flex>
                                <Flex vertical gap={5}>
                                    <Title level={2} className="color-green-300">
                                        {">" + feature.count.toLocaleString()}
                                    </Title>
                                    <Text>{feature.description}</Text>
                                </Flex>
                            </Flex>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};
