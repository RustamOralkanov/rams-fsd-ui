import { Button, Col, Flex, Row, Tag, Typography } from "antd";
import { Container } from "../../../../shared/ui/container";
import { Colors } from "../../../../shared/types/Colors";
import { FlatCard } from "../../../../features/flats";
import { ChevronDownIcon, FavoriteIcon, PrintIcon, ShareIcon } from "../../../../shared/icons";
import { FlatPayments } from "./payments/FlatPayments";
import { FlatInfo } from "./info/FlatInfo";
import { FlatPaymentCarousel } from "./carousel/FlatPaymentCarousel";
import { FlatImage } from "./image/FlatImage";
import { Consultation } from "../../../../entities/consultation";
import common from "../../../../shared/styles/common.module.scss";

import "./FlatPage.scss";

const { Title, Text } = Typography;

export const FlatPage = () => {
    return (
        <section className="flat-page">
            <Container>
                <Flex vertical gap={100}>
                    <Row gutter={[20, 100]}>
                        <Col xl={16}>
                            <Flex vertical gap={30}>
                                <FlatImage />
                                <Text style={{ color: Colors.gray300, fontSize: 10, lineHeight: 1.6 }}>
                                    Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация, инфраструктура комплекса являются
                                    условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения государственной
                                    экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.
                                </Text>
                            </Flex>
                        </Col>
                        <Col xl={8}>
                            <Flex vertical gap={10} className={[common["bg-white"], common["radius-12"], common["padding-30"]].join(" ")}>
                                <Flex align="center" justify="space-between">
                                    <Flex align="center" gap={5}>
                                        <Tag color={Colors.green500}>№ 115</Tag>
                                        <Tag color={Colors.green500}>Grande Vie</Tag>
                                    </Flex>
                                    <Flex align="center" gap={15}>
                                        <FavoriteIcon style={{ color: Colors.gray500 }} className={common.pointer} />
                                        <ShareIcon style={{ color: Colors.gray500 }} className={common.pointer} />
                                        <PrintIcon style={{ color: Colors.gray500 }} className={common.pointer} />
                                    </Flex>
                                </Flex>
                                <FlatInfo />
                                <Button type="text">
                                    <Flex gap={7}>
                                        Подробнее
                                        <ChevronDownIcon />
                                    </Flex>
                                </Button>
                                <FlatPayments />
                                <Flex vertical className={"personal"} gap={7}>
                                    <Title level={5} style={{ color: Colors.white }}>
                                        Индивидуальный расчет
                                    </Title>
                                    <Text style={{ color: Colors.white, lineHeight: 1.2, fontSize: 10 }}>
                                        Наш онлайн калькулятор поможет вам подобрать удобный способ расчета, а также подходящую для вас квартиру!
                                    </Text>
                                </Flex>
                                <Flex gap={10}>
                                    <Button type="primary" block disabled>
                                        Купить
                                    </Button>
                                    <Button block>Консультация</Button>
                                </Flex>
                                <FlatPaymentCarousel />
                                <Button type="text">
                                    <Flex gap={7}>
                                        Как купить квартиру
                                        <ChevronDownIcon style={{ transform: "rotate(-90deg)" }} />
                                    </Flex>
                                </Button>
                            </Flex>
                        </Col>
                        <Col span={24}>
                            <Flex vertical gap={40}>
                                <Title level={2}>Квартиры которые вам понравятся</Title>
                                <Row gutter={[20, 20]}>
                                    {[...Array(4)].map((_, index) => (
                                        <Col xl={6} key={index}>
                                            <FlatCard />
                                        </Col>
                                    ))}
                                </Row>
                            </Flex>
                        </Col>
                    </Row>
                    <Consultation />
                </Flex>
            </Container>
        </section>
    );
};
