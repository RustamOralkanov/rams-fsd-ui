import { Button, Col, Flex, Row, Typography } from "antd";
import { Banner, Container } from "@/shared/ui";

const { Title, Text } = Typography;

export const CareerBanner = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={16}>
                        <Banner>
                            <Title level={1} className="color-white">
                                Стань частью команды <br /> Rams Qazaqstan
                            </Title>
                        </Banner>
                    </Col>
                    <Col xl={8}>
                        <Flex vertical className="bg-green-300 border-radius-l padding-40 height-full" justify="space-between">
                            <Text className="color-white">
                                Нашим сотрудникам мы предлагаем комфортные условия труда и пространство, где каждый имеет возможность предлагать идеи, претворять их в жизнь и
                                реализовывать свои амбиции и потенциал в полной мере.
                            </Text>
                            <Button type="primary" className="width-fit">
                                Присоедениться
                            </Button>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
