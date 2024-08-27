import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { partnersFeatures } from "../../model/partners.data";

const { Title, Text } = Typography;

export const PartnersFeatures = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Почему сотрудничество с RAMS Qazaqstan – это выгодно?</Title>
                    <Row gutter={[20, 20]}>
                        {partnersFeatures.map((feature, index) => (
                            <Col xl={6} key={index}>
                                <Flex vertical className="padding-40 bg-gray-50 border-radius-l" justify="space-between" style={{ height: 350 }}>
                                    <Flex className="width-50 border-radius-circle bg-white" justify="center" align="center">
                                        <Image src={feature.icon} preview={false} />
                                    </Flex>
                                    <Text className="color-gray-500">{feature.description}</Text>
                                </Flex>
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
