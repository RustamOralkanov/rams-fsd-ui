import { Col, Flex, Image, Row, Typography } from "antd";
import FMSLogo from "@/app/assets/icons/fms-logo.svg";
import { Banner, Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const FMSBanner = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={16}>
                        <Banner>
                            <Title level={1} className="color-white">
                                Доверьте управление домом профессионалам
                            </Title>
                        </Banner>
                    </Col>
                    <Col xl={8}>
                        <Flex vertical style={{ backgroundColor: "#4C9FAF" }} className="border-radius-l padding-40 height-full" justify="space-between">
                            <Image src={FMSLogo} preview={false} width={138} />
                            <Text className="color-white">
                                Команда RAMS FMS сделает ваш дом чистым и исправным. Именно мы будем поддерживать работу каждой детали в вашем жилом комплексе. Посвятите себя
                                семье, а мы профессионально поможем вам в решении сервисных вопросов дома. Наше обслуживание сэкономит для вас время, деньги и энергию
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
