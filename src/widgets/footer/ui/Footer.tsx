import { Col, Row, Flex, Typography, Button, Image } from "antd";
import { Container } from "../../../shared/ui/container";
import { footerDatas } from "../model/footer.data";
import { Link } from "react-router-dom";
import { Colors } from "../../../shared/types/Colors";
import LetterImage from "../../../app/assets/icons/letter.svg";
import common from "../../../shared/styles/common.module.scss";
import "./Footer.scss";

const { Text, Title } = Typography;

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row gutter={[50, 50]}>
                    <Col xxl={10} xl={10}>
                        <Flex vertical gap={55}>
                            <Flex vertical gap={15}>
                                <Title level={4}>Есть вопросы или предложения?</Title>
                                <Button style={{ width: "fit-content" }}>Напишите нам</Button>
                            </Flex>
                            <Flex gap={35}>
                                {footerDatas.agreements.map((agreement, index) => (
                                    <Link to={"/"} key={index} className="footer-link">
                                        {agreement.title}
                                    </Link>
                                ))}
                            </Flex>
                        </Flex>
                    </Col>
                    <Col xxl={{ span: 10, offset: 2 }} xl={{ span: 12, offset: 2 }}>
                        <Flex justify="space-between">
                            {footerDatas.pages.map((page, index) => (
                                <Flex vertical gap={10} key={index}>
                                    <Title level={5}>{page.title}</Title>
                                    {page.links.map((link, index) => (
                                        <Flex gap={12} align="center" key={index}>
                                            {link.icon && <Image src={link.icon} preview={false} />}
                                            <Link to={link.path} className="footer-link">
                                                {link.title}
                                            </Link>
                                        </Flex>
                                    ))}
                                    {page.title === "Проекты" && (
                                        <Link to={"/"} className="footer-all">
                                            Все проекты
                                        </Link>
                                    )}
                                </Flex>
                            ))}
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Flex className={[common["padding-20"], common["bg-white"], common["radius-10"]].join(" ")} justify="space-between" align="center">
                            <Flex gap={30} align="center">
                                <Image src={LetterImage} preview={false} />
                                <Flex vertical>
                                    <Title level={5} style={{ color: Colors.gold }}>
                                        Узнайте первым о старте продаж!
                                    </Title>
                                    <Text>Новые проекты в 2022 году</Text>
                                </Flex>
                            </Flex>
                            <Button type="primary">Подписаться</Button>
                        </Flex>
                    </Col>
                    <Col span={24} style={{ lineHeight: 1.33 }}>
                        <Text style={{ fontSize: 12 }}>
                            ©1997-2024, ТОО «РАМС-Казахстан» <br /> Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация,
                            инфраструктура комплекса являются условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения
                            государственной экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.
                        </Text>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
