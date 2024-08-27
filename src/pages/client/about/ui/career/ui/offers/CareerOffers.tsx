import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import { careerOffers } from "../../model/career.data";

const { Title } = Typography;

export const CareerFeatures = () => {
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Мы предлагаем</Title>
                    <Row gutter={[20, 20]}>
                        {careerOffers.map((offer) => (
                            <Col xl={6} key={offer.id}>
                                <Flex vertical justify="space-between" className="bg-gray-50 border-radius-m padding-40" style={{ height: 291 }}>
                                    <Flex justify="center" align="center" className="width-50 border-radius-circle bg-white">
                                        <Image src={offer.icon} preview={false} />
                                    </Flex>
                                    <Flex vertical gap={5}>
                                        <Title level={5}>{offer.description}</Title>
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
