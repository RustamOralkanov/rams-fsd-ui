import common from "@styles/common.module.scss";
import { Button, Carousel, Col, Flex, Image, Row, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui/container";
import { useGetHomeBannersQuery } from "../../api/banners.api";
import { useBanners } from "../../model/useBanners";

import "./Banners.scss";

const { Title, Text, Paragraph } = Typography;

export const Banners = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { carouselRef, prevSlide, nextSlide } = useBanners();
    const { data: banners, isSuccess } = useGetHomeBannersQuery();

    const beforeChange = (_: unknown, nextSlide: number) => {
        setCurrentIndex(nextSlide);
    };

    if (isSuccess)
        return (
            <section>
                <Container>
                    <Row gutter={[20, 20]}>
                        <Col xxl={16} xl={16} lg={16}>
                            <Carousel
                                ref={carouselRef}
                                fade
                                autoplay
                                draggable
                                autoplaySpeed={5000}
                                className={[common.hidden, common["radius-16"], "banners", "bg-gray-50"].join(" ")}
                                style={{ aspectRatio: "82 / 45" }}
                                beforeChange={beforeChange}
                            >
                                {banners
                                    .filter((banner) => banner.is_mobile !== 1)
                                    .map((banner) => (
                                        <Flex key={banner.id}>
                                            <Link to={banner.alias}>
                                                <Image src={banner.images} preview={false} style={{ aspectRatio: "82 / 45", objectFit: "cover" }} />
                                            </Link>
                                        </Flex>
                                    ))}
                            </Carousel>
                        </Col>
                        <Col xl={8} lg={8}>
                            <Flex vertical className={[common["bg-gray50"], common["radius-16"], common["height-full"], common["padding-40"]].join(" ")} justify="space-between">
                                <Text className="banners-tag">{banners[currentIndex]?.tag || "n/d"}</Text>
                                <Flex vertical gap={20}>
                                    <Title level={2} style={{ color: Colors.green600, fontWeight: 600 }} ellipsis={{ rows: 2 }}>
                                        {banners[currentIndex]?.title || "n/d"}
                                    </Title>
                                    <Paragraph ellipsis={{ rows: 3 }}>{banners[currentIndex]?.subtitle || "n/d"}</Paragraph>
                                </Flex>
                                <Flex align="center" justify="space-between">
                                    <Link to={banners[currentIndex]?.alias}>
                                        <Button type="primary">Подробнее</Button>
                                    </Link>
                                    <Flex gap={4} align="center">
                                        <Button shape="circle" className={"banners-button"} onClick={prevSlide}>
                                            <ArrowLeftIcon />
                                        </Button>
                                        <Button shape="circle" className={"banners-button"} onClick={nextSlide}>
                                            <ArrowRightIcon />
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
};
