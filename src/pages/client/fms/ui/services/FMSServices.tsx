import { Col, Flex, Row, Typography, Image } from "antd";
import { Container } from "@/shared/ui";
import { fmsServices } from "../../model/fms.data";

const { Title, Text } = Typography;

export const FMSServices = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title>Наши услуги</Title>
                    <Row gutter={[20, 20]}>
                        {fmsServices.map((service) => (
                            <Col xl={6} key={service.id}>
                                <Flex vertical gap={20} className="padding-20 border-radius-m border-gray-100 height-full">
                                    <Image src={service.image} className="object-cover border-radius-m" height={300} preview={false} />
                                    <Flex vertical gap={10}>
                                        <Title level={4} className="color-green-600">
                                            {service.title}
                                        </Title>
                                        <Text className="color-gray-500">{service.description}</Text>
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
