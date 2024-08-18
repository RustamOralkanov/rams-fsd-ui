import AppStore from "@assets/icons/app-store.svg";
import GooglePlay from "@assets/icons/google-play.svg";
import { Col, Row, Flex, Typography, Button, Image } from "antd";
import { Link } from "react-router-dom";
import { Colors } from "../../../shared/types/Colors";
import { Container } from "../../../shared/ui/container";
import { headerData } from "../../header/model/headerData";
import { footerDatas } from "../model/footer.data";
import { useFooter } from "../model/useFooter";
import "./Footer.scss";

const { Text, Title } = Typography;

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { active } = useFooter();

    return (
        <footer className={["footer", active ? "flat" : ""].join(" ")}>
            <Container>
                <Row gutter={[50, 50]} className="footer-wrapper">
                    <Col xxl={8} xl={8}>
                        <Flex vertical gap={34}>
                            <Flex vertical gap={20}>
                                <Image src={headerData.logo} width={100} preview={false} />
                                <Text className="footer-copyright">©1997-{currentYear}, ТОО «РАМС-Казахстан»</Text>
                            </Flex>
                            <Flex vertical gap={12}>
                                {footerDatas.pages.map((page, index) => {
                                    if (page.id === 3)
                                        return (
                                            <Flex vertical gap={10} key={index}>
                                                <Title level={5}>{page.title}</Title>
                                                <Flex gap={12}>
                                                    {page.links.map((link, index) => (
                                                        <Image src={link.icon} preview={false} key={index} />
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        );
                                })}
                            </Flex>
                            <Flex vertical gap={15}>
                                <Title level={5}>Есть вопросы или предложения?</Title>
                                <Button style={{ width: "fit-content" }}>Напишите нам</Button>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col xxl={16} xl={16}>
                        <Row gutter={[20, 20]}>
                            {footerDatas.pages.map((page, index) => {
                                if (page.id !== 3)
                                    return (
                                        <Col xl={6} key={index}>
                                            <Flex vertical gap={10}>
                                                <Title level={5}>{page.title}</Title>
                                                {page.links.map((link, index) => (
                                                    <Flex gap={12} align="center" key={index}>
                                                        {link.icon && <Image src={link.icon} preview={false} />}
                                                        <Link to={link.path} className="footer-link">
                                                            {link.title}
                                                        </Link>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        </Col>
                                    );
                            })}
                        </Row>
                    </Col>
                </Row>
                <Row gutter={[20, 20]} className="footer-wrapper-bottom" align={"top"}>
                    <Col xl={8}>
                        <Flex vertical gap={14}>
                            <Text className="footer-copyright">Скачайте приложение RAMS</Text>
                            <Flex gap={12} align="center">
                                <Image src={AppStore} preview={false} height={34} />
                                <Image src={GooglePlay} preview={false} height={34} />
                            </Flex>
                        </Flex>
                    </Col>
                    <Col xl={10} style={{ lineHeight: 1 }}>
                        <Text style={{ fontSize: 10, color: Colors.gray500 }}>
                            ©1997-2024, ТОО «РАМС-Казахстан» <br /> Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их нумерация,
                            инфраструктура комплекса являются условными и могут быть изменены в ходе проектирования, строительства и эксплуатации в рамках положительного заключения
                            государственной экспертизы. Настоящая реклама, в соответствии со ст. 395 ГК РК не является публичной офертой.
                        </Text>
                    </Col>
                    <Col xl={6}>
                        <Flex gap={12} wrap justify="flex-end">
                            {footerDatas.agreements.map((agreement, index) => (
                                <Link to={"/"} key={index} className="footer-agreement">
                                    {agreement.title}
                                </Link>
                            ))}
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
