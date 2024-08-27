import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const SupportTeam = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 40]}>
                    <Col xl={6}>
                        <Title level={2}>Наша команда</Title>
                    </Col>
                    <Col xl={{ span: 16, offset: 2 }}>
                        <Flex vertical gap={20}>
                            <Text className="color-gray-500">
                                Профессиональня команда осуществляет поддержку клиентов Rams Qazaqstan с момента подписания договора и в течение всего гарантийного срока,
                                установленного компанией.
                            </Text>
                            <Text className="color-gray-500">
                                Мобильная команда обеспечивает техническое сопровождение и обслуживание жилых комплексов компании, решая широкий спектр вопросов, связанных с
                                эксплуатацией здания и устранением дефектов и неполадок.
                            </Text>
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Row gutter={[20, 40]}>
                            {[...Array(8)].map((_, index) => (
                                <Col xl={6} key={index}>
                                    <Flex vertical gap={30}>
                                        <Image
                                            src="https://ramsqz.com/storage/pages/post_sell/employee_1_013dd1268fb3625efbab033bd5b9cc26.png"
                                            preview={false}
                                            width={"100%"}
                                            className="object-cover border-radius-m"
                                        />
                                        <Flex vertical>
                                            <Title level={4}>Абилкасымов Абилмансур </Title>
                                            <Text>Юрист</Text>
                                        </Flex>
                                    </Flex>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
