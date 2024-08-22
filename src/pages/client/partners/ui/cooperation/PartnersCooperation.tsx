import CooperationImage from "@assets/images/partners/partners-cooperation.webp";
import { Col, Row, Image, Flex, Typography } from "antd";
import { Container } from "@/shared/ui";
import { partnersCooperations } from "../../model/partners.data";

const { Title, Text } = Typography;

export const PartnersCooperation = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={14}>
                        <Flex vertical gap={40} className="padding-60 border-radius-m border-gray-100 height-full" justify="center">
                            <Title level={2}>
                                Преимущества сотрудничества <br /> с RAMS Qazaqstan
                            </Title>
                            <Flex vertical gap={10}>
                                {partnersCooperations.map((cooperation) => (
                                    <Flex gap={10} align="center" key={cooperation.id}>
                                        <Title level={5} className="color-green-500" style={{ flex: "0 0 20px" }}>
                                            {"0" + cooperation.id}
                                        </Title>
                                        <Text className="color-gray-500">{cooperation.description}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Col>
                    <Col xl={10}>
                        <Image src={CooperationImage} preview={false} width={"100%"} height={"100%"} className="border-radius-m object-cover" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
