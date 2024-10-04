import { Button, Col, Flex, Image, Row, Typography } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { NewsCard } from "@/entities/news";
import { useGetAllNewsDiscountsQuery, useGetSingleNewsDiscountsQuery } from "@/entities/news/api/news-discounts.api";
import { Subscribe } from "@/entities/subscribe";
import { ShareIcon } from "@/shared/icons";
import { Container, CustomTag } from "@/shared/ui";
import "./NewsDetailsPage.scss";

const { Title, Text } = Typography;

export const NewsDetailsPage = () => {
    const { alias } = useParams();
    const { state } = useLocation();
    const { data, isSuccess } = useGetSingleNewsDiscountsQuery({ id: alias || state.id });
    const { data: newsOrDiscounts } = useGetAllNewsDiscountsQuery({ type: state.type });

    if (isSuccess)
        return (
            <Flex vertical gap={80}>
                <section>
                    <Container>
                        <Row gutter={[20, 20]}>
                            <Col xl={12}>
                                <Flex vertical gap={15}>
                                    {data.files && data.files.map((file, index) => <Image src={file} preview={false} className="border-radius-m" key={index} />)}
                                </Flex>
                            </Col>
                            <Col xl={{ span: 10, offset: 2 }}>
                                <Flex vertical gap={20}>
                                    <Flex align="center" justify="space-between">
                                        <Flex align="center" gap={20}>
                                            <CustomTag text={data.type === "news" ? "Новость" : "Акции"} />
                                            <Text className="description-m color-gray-500">{data.date}</Text>
                                        </Flex>
                                        <Flex align="center" gap={10}>
                                            <ShareIcon className="color-gray-500" />
                                            <Text className="description-m color-gray-500">Поделиться</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex vertical gap={24}>
                                        <div dangerouslySetInnerHTML={{ __html: data.content }} className="details-content"></div>
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
                                <Title level={2}>Другие {state.type === "news" ? "новости" : "акции"}</Title>
                                <Link to={"/" + APP_ROUTES.NEWS}>
                                    <Button>Все новости и акции</Button>
                                </Link>
                            </Flex>
                            <Row gutter={[20, 20]}>
                                {newsOrDiscounts?.slice(0, 3).map((item, index) => (
                                    <Col xl={8} key={index}>
                                        <NewsCard {...item} />
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
