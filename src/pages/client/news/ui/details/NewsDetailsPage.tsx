import { Button, Col, Flex, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { NewsCard } from "@/entities/news";
import { Subscribe } from "@/entities/subscribe";
import { ShareIcon } from "@/shared/icons";
import { Container, CustomTag } from "@/shared/ui";

const { Title, Text } = Typography;

export const NewsDetailsPage = () => {
    return (
        <Flex vertical gap={80}>
            <section>
                <Container>
                    <Row gutter={[20, 20]}>
                        <Col xl={12}>
                            <Image src="https://ramsqz.com/storage/news/gallery/beJYcBbgAbwjturlRiql5JKbiChPWTc8r1CVwC5L.jpg" preview={false} className="border-radius-m" />
                        </Col>
                        <Col xl={{ span: 10, offset: 2 }}>
                            <Flex vertical gap={20}>
                                <Flex align="center" justify="space-between">
                                    <Flex align="center" gap={20}>
                                        <CustomTag text={"Новость"} />
                                        <Text className="description-m color-gray-500">16 сентября 2022</Text>
                                    </Flex>
                                    <Flex align="center" gap={10}>
                                        <ShareIcon className="color-gray-500" />
                                        <Text className="description-m color-gray-500">Поделиться</Text>
                                    </Flex>
                                </Flex>
                                <Flex vertical gap={24}>
                                    <Text className="color-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut gravida dolor, nec lobortis nibh. Proin enim dui, egestas ut lectus
                                        nec, auctor aliquam mauris. Aliquam metus risus, dapibus at pellentesque in, porttitor mattis justo. In ultrices ligula vel tortor
                                        venenatis, lobortis dignissim orci commodo. Nullam euismod ante ut dui malesuada, nec semper purus pulvinar. Maecenas et felis elementum
                                        eros aliquam tincidunt sed ut tortor.
                                    </Text>
                                    <Text className="color-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut gravida dolor, nec lobortis nibh. Proin enim dui, egestas ut lectus
                                        nec, auctor aliquam mauris. Aliquam metus risus, dapibus at pellentesque in, porttitor mattis justo. In ultrices ligula vel tortor
                                        venenatis, lobortis dignissim orci commodo. Nullam euismod ante ut dui malesuada, nec semper purus pulvinar. Maecenas et felis elementum
                                        eros aliquam tincidunt sed ut tortor.
                                    </Text>
                                    <Text className="color-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut gravida dolor, nec lobortis nibh. Proin enim dui, egestas ut lectus
                                        nec, auctor aliquam mauris. Aliquam metus risus, dapibus at pellentesque in, porttitor mattis justo. In ultrices ligula vel tortor
                                        venenatis, lobortis dignissim orci commodo. Nullam euismod ante ut dui malesuada, nec semper purus pulvinar. Maecenas et felis elementum
                                        eros aliquam tincidunt sed ut tortor.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Flex vertical gap={40}>
                        <Flex align="center" justify="space-between">
                            <Title level={2}>Другие новости</Title>
                            <Link to={"/" + APP_ROUTES.NEWS}>
                                <Button>Все новости и акции</Button>
                            </Link>
                        </Flex>
                        <Row gutter={[20, 20]}>
                            {[...Array(3)].map((_, index) => (
                                <Col xl={8} key={index}>
                                    <NewsCard />
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                </Container>
            </section>
            <Subscribe />
        </Flex>
    );
};
