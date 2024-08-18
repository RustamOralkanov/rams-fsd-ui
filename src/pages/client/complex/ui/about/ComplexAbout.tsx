import common from "@styles/common.module.scss";
import { Col, Row, Image, Typography, Flex, Button } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui/container";
import "./ComplexAbout.scss";

const { Text, Title } = Typography;

const datas = [
    {
        title: "квартир",
        value: "450+",
    },
    {
        title: "этажа",
        value: "10-14",
    },
    {
        title: "блоков",
        value: "12",
    },
    {
        title: "высота потолков",
        value: "2,9-3,4",
    },
];

export const ComplexAbout = () => {
    return (
        <section>
            <Container>
                <Row gutter={[20, 20]} className="complex-about">
                    <Col xxl={10} xl={10}>
                        <Image
                            src="https://ramsqz.com/storage/complexes/gallery/9cU9Gg9viarPmjig8mYhn2C7n1Sw7B39aOTQW56c.jpg"
                            preview={false}
                            style={{ aspectRatio: "50.5 / 45" }}
                            className={[common["radius-12"], common.hidden, common.cover, common["object-center"]].join(" ")}
                        />
                    </Col>
                    <Col xxl={{ span: 12, offset: 2 }} xl={{ span: 12, offset: 2 }}>
                        <Flex vertical justify="space-between" className={[common["height-full"]].join(" ")}>
                            <Flex vertical gap={30}>
                                <Title level={2}>О проекте</Title>
                                <Text style={{ color: Colors.gray500 }}>
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                                    fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                                    scelerisque ante pulvinar.
                                </Text>
                                <Button style={{ width: "fit-content" }}>Подробнее</Button>
                            </Flex>
                            <Flex gap={12}>
                                {datas.map((data, index) => (
                                    <Flex vertical gap={4} key={index} flex={1} className="wrapper">
                                        <Title className="title">{data.value}</Title>
                                        <Text className="text">{data.title}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
