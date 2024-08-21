import FacingMaterials from "@assets/images/facing-material.webp";
import { Button, Col, Flex, Row, Typography, Image, Tabs } from "antd";
import { Consultation } from "../../../../entities/consultation";
import { ComplexCard } from "../../../../features/complexes";
import { Banner, Container } from "../../../../shared/ui";
import { facingDecoration, facingFeatures } from "../model/facing.data";
import { FacingGlobus } from "./globus/FacingGlobus";
import "./FacingPage.scss";
import { FacingTour } from "./tour/FacingTour";

const { Text, Title } = Typography;

export const FacingPage = () => {
    return (
        <Flex vertical gap={80} className="facing-page">
            <Container>
                <Flex vertical gap={80}>
                    <Banner>
                        <Title level={1} className="color-white">
                            Квартиры с чистовой <br /> отделкой в новом формате
                        </Title>
                        <Button type="primary" className="width-fit">
                            Оставить заявку
                        </Button>
                    </Banner>
                    <Row gutter={[80, 40]} align={"top"}>
                        <Col xl={14}>
                            <Tabs
                                items={[
                                    {
                                        key: "kitchen",
                                        label: "С кухонным гарнитуром",
                                        children: (
                                            <Flex vertical gap={20}>
                                                <Flex vertical>
                                                    <svg width="100%" height="100%" viewBox={"0 0 733 380"} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                                        <image
                                                            href={"https://ramsqz.com/storage/pages/facing/slider_image_1_204bd539f9fcc8a9c2d074958ca51b18.png"}
                                                            x="0"
                                                            y="0"
                                                            width="100%"
                                                            height="100%"
                                                        />
                                                    </svg>
                                                </Flex>
                                                <Text>
                                                    Кухня с готовым ремонтом и встроенной кухней с фартуком из крупноформатной плитки. Есть выемки под встраиваемую технику и
                                                    розетки под бытовые приборы.
                                                </Text>
                                            </Flex>
                                        ),
                                    },
                                    {
                                        key: "bathroom",
                                        label: "Готовая ванная",
                                        children: 1,
                                    },
                                    {
                                        key: "things",
                                        label: "Продумано до мелочей",
                                        children: 1,
                                    },
                                ]}
                            ></Tabs>
                        </Col>
                        <Col xl={10}>
                            <Flex vertical gap={30} style={{ marginTop: 87 }}>
                                <Flex vertical gap={20}>
                                    <Title level={2}>Новый уровень комфорта</Title>
                                    <Text className="color-gray-500">
                                        Чистовая отделка в новом формате от RAMS Qazaqstan – это возможность заехать в свежую и светлую квартиру сразу после покупки. Теперь клиенты
                                        RAMS Qazaqstan получают ключи от обустроенной квартиры с покрашенными стенами, ламинатом, комплектом сантехники и готовой кухней.
                                        Покупателям остается лишь подобрать мебель и начать новую главу жизни.
                                    </Text>
                                </Flex>
                                <Flex vertical gap={10}>
                                    {facingDecoration.map((decor, index) => (
                                        <Flex key={index} gap={24} align="center" className="bg-gray-50 border-radius-m" style={{ padding: "12px 24px" }}>
                                            <Flex flex={"1 0 auto"}>
                                                <Image src={FacingMaterials} preview={false} height={35} />
                                            </Flex>

                                            <Text className="color-gray-500">{decor.description}</Text>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                    <Flex vertical gap={40}>
                        <Title level={2}>Три преимущества нового формата</Title>
                        <Row gutter={[20, 20]}>
                            {facingFeatures.map((feature, index) => (
                                <Col xl={8} key={index}>
                                    <Flex vertical className="padding-40 bg-gray-50 border-radius-l" justify="space-between" style={{ height: 414 }}>
                                        <Flex justify="center" align="center" className="bg-white width-50 border-radius-circle">
                                            <Image src={feature.icon} preview={false} width={24} height={24} />
                                        </Flex>
                                        <Flex vertical gap={10}>
                                            <Title level={3}>{feature.title}</Title>
                                            <Text className="color-gray-500">{feature.description}</Text>
                                        </Flex>
                                    </Flex>
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                </Flex>
            </Container>
            <section className="facing-page-quality">
                <Container>
                    <Row gutter={[20, 20]} align={"middle"}>
                        <Col xl={8}>
                            <Flex vertical gap={20}>
                                <Title style={{ fontSize: 64, lineHeight: 1 }} className="color-white">
                                    Мировое восприятие качества
                                </Title>
                                <Text className="color-white">
                                    Квартиры передаются жильцам в чистовой отделке с полным комплектом сантехники и встроенной кухней. Больше не нужно искать жилье на время ремонта
                                    и приспосабливаться к другим ограничениям. Достаточно лишь завезти мебель – новая квартира уже готова к заселению.
                                </Text>
                            </Flex>
                        </Col>
                        <Col xl={16}>
                            <FacingGlobus />
                        </Col>
                    </Row>
                </Container>
            </section>
            <FacingTour />
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Проекты в которых доступна чистовая отделка</Title>
                    <Row gutter={[20, 20]}>
                        {[...Array(3)].map((_, index) => (
                            <Col xl={8} key={index}>
                                <ComplexCard />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
            <Consultation />
        </Flex>
    );
};
