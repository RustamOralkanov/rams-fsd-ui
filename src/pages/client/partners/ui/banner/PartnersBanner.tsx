import RamsLogo from "@assets/icons/logo-color.svg";
import { Button, Col, Flex, Image, Row, Typography } from "antd";
import { Banner, Container } from "../../../../../shared/ui";

const { Title, Text } = Typography;

export const PartnersBanner = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col xl={16}>
                        <Banner>
                            <Title level={1} className="color-white">
                                Откройте для себя новые возможности бизнеса в сфере недвижимости
                            </Title>
                        </Banner>
                    </Col>
                    <Col xl={8}>
                        <Flex vertical className="padding-40 border-radius-l bg-green-400 height-full" justify="space-between">
                            <Image src={RamsLogo} preview={false} width={113} />
                            <Text className="color-white">
                                Применяя инновационные технологии и высочайшее мастерство, строим превосходные пространства для счастливой жизни. Создание инфраструктуры для
                                процветания наших клиентов, сотрудников и партнеров.
                            </Text>
                            <Button className="white-button width-fit">Стать партнером</Button>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
