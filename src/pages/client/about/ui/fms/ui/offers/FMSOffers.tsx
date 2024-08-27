import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { fmsOffers } from "../../model/fms.data";

const { Title, Text } = Typography;

export const FMSOffers = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 40]}>
                    <Col xl={10}>
                        <Title level={2}>Для эффективного управления зданием мы предлагаем</Title>
                    </Col>
                    <Col xl={{ span: 12, offset: 2 }}>
                        <Text>
                            Мы также возьмем на себя организационную деятельность внутри комплекса, включая юридические вопросы, планирование и контроль бюджета ЖК, отчетность,
                            повышение экологической осведомленности, а также создание и реализацию проектов социальной ответственности.
                        </Text>
                    </Col>
                    <Col span={24}>
                        <Flex gap={20} align="center">
                            {fmsOffers.map((offer) => (
                                <Flex key={offer.id} justify="space-between" vertical className="bg-gray-50 border-radius-l padding-30" style={{ height: 250, width: "calc(20%)" }}>
                                    <Flex justify="center" align="center" className="width-50 border-radius-circle bg-white">
                                        <Image src={offer.icon} preview={false} />
                                    </Flex>
                                    <Title level={4} className="color-gray-500">
                                        {offer.title}
                                    </Title>
                                </Flex>
                            ))}
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
