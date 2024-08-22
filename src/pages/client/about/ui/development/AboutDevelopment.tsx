import AboutDevelopmentImage from "@assets/images/about/about-development.webp";
import { Button, Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";

import "./AboutDevelopment.scss";

const { Text, Title } = Typography;

export const AboutDevelopment = () => {
    return (
        <section className="about-development">
            <Container>
                <Row gutter={[20, 20]} align={"middle"}>
                    <Col xl={10}>
                        <Image src={AboutDevelopmentImage} preview={false} className="border-radius-m" />
                    </Col>
                    <Col xl={{ span: 12, offset: 2 }}>
                        <Flex vertical gap={30}>
                            <Title level={2}>Устойчивое развитие</Title>
                            <Text className="color-gray-500">
                                Осознавая свою ответственность, компания RAMS ставит снижение эмиссий и углеродную дружелюбность к экосистемам во главе всех своих процессов.
                                Строительство несет повышенную эконагрузку, поэтому компания RAMS выстраивает процессы так, чтобы потребление в процессе строительства и дальнейшей
                                эксплуатации объектов планировалось и реализовывалось с учетом будущего и без нанесения урона ресурсам планеты и экологии.
                            </Text>
                            <Button className="solid-white-button width-fit">Узнать подробнее</Button>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
