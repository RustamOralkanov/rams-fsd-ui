import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { partners } from "../../model/partners.data";

const { Text, Title } = Typography;

export const Partners = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Flex vertical gap={20}>
                        <Title level={2}>Наши партнеры</Title>
                        <Text className="color-gray-500" style={{ maxWidth: 715 }}>
                            Мы гордимся нашими действующими партнерами – ведущими агентствами недвижимости и опытными риэлторами на рынке Казахстана. Наше партнерство с этими
                            профессионалами дает нам доступ к широкой базе клиентов и обеспечивает высокое качество услуг в сфере недвижимости.
                        </Text>
                    </Flex>
                    <Row gutter={[20, 20]}>
                        {partners.map((image, index) => (
                            <Col xl={6} key={index}>
                                <Flex justify="center" align="center" className="bg-gray-50 border-radius-m" style={{ height: 200 }}>
                                    <Image src={image} preview={false} />
                                </Flex>
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
