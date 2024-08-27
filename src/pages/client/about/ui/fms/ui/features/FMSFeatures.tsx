import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { fmsFeatures } from "../../model/fms.data";

const { Title, Text } = Typography;

export const FMSFeatures = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Преимущества</Title>
                    <Row gutter={[20, 20]}>
                        {fmsFeatures.map((feature) => (
                            <Col span={8} key={feature.id}>
                                <Flex justify="space-between" vertical className="bg-gray-50 border-radius-l padding-30" style={{ height: 300 }}>
                                    <Flex justify="center" align="center" className="width-50 border-radius-circle bg-white">
                                        <Image src={feature.icon} preview={false} />
                                    </Flex>
                                    <Flex vertical gap={10}>
                                        <Title level={4} className="color-gray-500">
                                            {feature.title}
                                        </Title>
                                        <Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore unde, possimus molestias ducimus quaerat illum magni, error, amet quod
                                            consequuntur vitae eius a voluptatem ex quis? Laborum recusandae quasi pariatur.
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
