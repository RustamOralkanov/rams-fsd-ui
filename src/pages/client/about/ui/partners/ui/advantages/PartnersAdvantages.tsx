import block1 from "@assets/images/partners/block-1.svg";
import block21 from "@assets/images/partners/block-2-1.svg";
import block2 from "@assets/images/partners/block-2.svg";
import block31 from "@assets/images/partners/block-3-1.svg";
import block3 from "@assets/images/partners/block-3.webp";
import block4 from "@assets/images/partners/block-4.svg";
import block5 from "@assets/images/partners/block-5.svg";
import block6 from "@assets/images/partners/block-6.svg";
import block7 from "@assets/images/partners/block-7.webp";
import block8 from "@assets/images/partners/block-8.svg";
import block9 from "@assets/images/partners/block-9.svg";

import { Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "@/shared/ui";
import "./PartnersAdvantages.scss";

const { Text, Title } = Typography;

export const PartnersAdvantages: React.FC = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]}>
                    <Col lg={6} md={6} sm={12} xs={24}>
                        <Flex vertical gap={20}>
                            <Flex style={{ padding: "24px 41px 25px 31px", position: "relative" }} className="height-200 bg-green radius-20 border-box" vertical>
                                <Text className="color-white">Завершено строительство квартир площадью в</Text>
                                <Flex vertical gap={5}>
                                    <h4 className="color-gold-500" style={{ fontSize: 96, lineHeight: "123px" }}>
                                        4
                                    </h4>
                                    <Text className="color-white position-absolute" style={{ bottom: 15, left: 35, fontSize: 12 }}>
                                        млн. кв.м.
                                    </Text>
                                    <img src={block1} alt="block1" style={{ position: "absolute", right: 0, bottom: 0 }} />
                                </Flex>
                            </Flex>
                            <Flex className="height-420 bg-grey radius-20 border-box" vertical justify="flex-end">
                                <Image src={block9} preview={false} height={240} style={{ position: "absolute", top: 38, left: "50%", transform: "translateX(-50%)" }} />
                                <Flex
                                    vertical
                                    style={{ padding: 30, backgroundColor: "#E3ECE9", width: "100%" }}
                                    className="height-220 radius-20 border-box"
                                    justify="space-between"
                                >
                                    <Image src={block8} preview={false} width={35} height={35} />
                                    <Flex vertical>
                                        <Title level={3} style={{ marginTop: "auto", zIndex: 3, fontWeight: 700, lineHeight: 1.14 }}>
                                            Работаем <br />
                                            <span className="color-gold-500"> в 8 отдельных</span>
                                            <br /> секторах
                                        </Title>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={24}>
                        <Flex vertical gap={20}>
                            <Flex style={{ padding: "0 69px 25px 33px" }} className="height-200 bg-grey radius-20 border-box">
                                <Title level={5} style={{ marginTop: "auto", zIndex: 3 }}>
                                    26 лет создаем проекты для вас
                                </Title>
                                <img src={block2} alt="block1" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 2 }} />
                                <img
                                    src={block21}
                                    alt="block1"
                                    width={"100%"}
                                    height={133}
                                    style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", zIndex: 0 }}
                                />
                            </Flex>
                            <Flex
                                style={{ background: `url(${block3}) center center/cover no-repeat`, padding: "30px 28px 30px 29px" }}
                                className="height-200 bg-grey radius-20 border-box"
                                vertical
                            >
                                <Image src={block31} preview={false} width={32} height={32} />
                                <Title level={5} className="color-white" style={{ marginTop: "auto", zIndex: 3, fontWeight: 500, lineHeight: 1.1 }}>
                                    Мы строим идеальные помещения, использую инновационные технологии и высококвалифицированную рабочую силу.
                                </Title>
                            </Flex>
                            <Flex style={{ padding: "27px 60px 30px 30px" }} className="height-200 bg-grey radius-20 border-box" vertical>
                                <Image src={block4} preview={false} width={24} height={24} />
                                <Title level={3} style={{ marginTop: "auto", zIndex: 3 }}>
                                    С пониманием устойчивого развития
                                </Title>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={24}>
                        <Flex vertical gap={20}>
                            <Flex
                                style={{
                                    background: `url(${block7})`,
                                    backgroundColor: "#E3ECE9",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPositionX: "right",
                                    backgroundPositionY: 170,
                                }}
                                className="height-640 radius-20"
                                vertical
                                justify="space-between"
                            >
                                <Flex style={{ padding: "30px 40px 0 30px" }} vertical>
                                    <Title style={{ letterSpacing: "-0.03em", fontSize: 20, lineHeight: 1.15 }}>
                                        Мы завершили <br /> строительство <br /> и сдали более
                                    </Title>
                                    <Title style={{ letterSpacing: "-0.03em", fontSize: 48, fontWeight: 800 }} className="color-green-500">
                                        20 000
                                    </Title>
                                    <Title style={{ letterSpacing: "-0.03em", fontSize: 20, lineHeight: 1.15 }}>
                                        квартир в различных <br /> странах мира
                                    </Title>
                                </Flex>
                                <Flex
                                    style={{ padding: "0 30px", position: "relative", width: "100%" }}
                                    className="height-220 bg-green radius-20 border-box"
                                    vertical
                                    justify="center"
                                >
                                    <Title style={{ fontSize: 24, lineHeight: 1 }} className="color-white">
                                        более
                                    </Title>
                                    <Title style={{ fontSize: 64, lineHeight: 1, fontWeight: 800 }} className="color-gold-500">
                                        15 000
                                    </Title>
                                    <Title style={{ fontSize: 24, lineHeight: 1, textAlign: "right" }} className="color-white">
                                        сотрудников
                                    </Title>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={24}>
                        <Flex vertical gap={20}>
                            <Flex className="height-42 radius-20 border-box" vertical style={{ backgroundColor: "#E3ECE9" }}>
                                <Flex vertical style={{ padding: "30px 60px 53px 30px" }} gap={50}>
                                    <Image src={block6} preview={false} width={30} height={30} />
                                    <Flex vertical>
                                        <Title style={{ marginTop: "auto", zIndex: 3, fontSize: 20, lineHeight: 1 }}>Эксплуатация</Title>
                                        <Title style={{ marginTop: "auto", lineHeight: 1.2, fontSize: 31, fontWeight: 800 }} className="color-green-500">
                                            в 5 странах
                                        </Title>
                                    </Flex>
                                </Flex>
                                <Flex style={{ padding: "24px 41px 25px 31px", position: "relative", width: "100%" }} className="height-200 bg-green radius-20 border-box" vertical>
                                    <Title style={{ position: "absolute", left: 45, top: "50%", transform: "translateY(-50%)", fontSize: 20 }} className="color-white">
                                        в
                                    </Title>
                                    <img src={block5} alt="block1" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
                                    <Title style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", fontSize: 20 }} className="color-white">
                                        городах
                                    </Title>
                                </Flex>
                            </Flex>
                            <Flex style={{ padding: "0 40px" }} className="height-200 bg-grey radius-20 border-box" vertical justify="center" align="center">
                                <Flex vertical gap={5}>
                                    <Title style={{ fontSize: 16, lineHeight: 1 }}>Мы запланировали</Title>
                                    <Flex align="center" gap={10}>
                                        <h4 style={{ fontSize: 74, lineHeight: 1, fontWeight: 900 }} className="color-green-500">
                                            8
                                        </h4>
                                        <Title style={{ fontSize: 16, lineHeight: 1 }}>
                                            новых проектов <br /> на глобальном <br /> уровне
                                        </Title>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
