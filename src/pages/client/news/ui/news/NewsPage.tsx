import { Col, Flex, Row, Spin, Tabs } from "antd";
import { useState } from "react";
import { NewsCard } from "@/entities/news";
import { useGetAllNewsDiscountsQuery } from "@/entities/news/api/news-discounts.api";
import { Subscribe } from "@/entities/subscribe";
import { Container } from "@/shared/ui";

export const NewsPage = () => {
    const [type, setType] = useState<"discount" | "news" | "">("");
    const { data, isLoading } = useGetAllNewsDiscountsQuery({ type: type });

    const handleTab = (key: string) => {
        setType(key as "discount" | "news" | "");
    };

    return (
        <Flex vertical gap={80}>
            <section>
                <Container>
                    <Tabs
                        animated
                        onChange={handleTab}
                        items={[...Array(3)].map((_, index) => {
                            return {
                                key: index === 0 ? "" : index === 1 ? "news" : index === 2 ? "discount" : "",
                                label: index === 0 ? "Все" : index === 1 ? "Новости" : index === 2 ? "Акции" : "",
                                children: (
                                    <Spin spinning={isLoading}>
                                        <Row gutter={[20, 40]}>
                                            {data?.map((item, index) => (
                                                <Col xxl={6} xl={8} key={index}>
                                                    <NewsCard {...item} />
                                                </Col>
                                            ))}
                                        </Row>
                                    </Spin>
                                ),
                            };
                        })}
                    />
                </Container>
            </section>
            <Subscribe />
        </Flex>
    );
};
