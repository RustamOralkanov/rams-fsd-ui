import { Button, Carousel, Col, Flex, Image, Row, Typography } from "antd";
import { Container } from "../../../../../shared/ui/container";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../shared/icons";
import { useBanners } from "../../model/useBanners";
import { Colors } from "../../../../../shared/types/Colors";
import common from "../../../../../shared/styles/common.module.scss";

import "./Banners.scss";

const { Title, Text, Paragraph } = Typography;

export const Banners = () => {
    const { carouselRef, prevSlide, nextSlide } = useBanners();

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
                            className={[common.hidden, common["radius-16"], "banners"].join(" ")}
                            style={{ aspectRatio: "82 / 45" }}
                        >
                            {[...Array(3)].map((_, index) => (
                                <Flex key={index}>
                                    <Image
                                        src="https://ramsqz.com/storage/banners/NFKRyuFElpEssGjzy27eVLXliJRACq5eMZwwS2uO.jpg"
                                        preview={false}
                                        key={index}
                                        style={{ aspectRatio: "82 / 45", objectFit: "cover" }}
                                    />
                                </Flex>
                            ))}
                        </Carousel>
                    </Col>
                    <Col xl={8} lg={8}>
                        <Flex vertical className={[common["bg-gray50"], common["radius-16"], common["height-full"], common["padding-40"]].join(" ")} justify="space-between">
                            <Text className="banners-tag">Dorem ipsum</Text>
                            <Flex vertical gap={20}>
                                <Title level={2} style={{ color: Colors.green600 }} ellipsis={{ rows: 2 }}>
                                    Vorem ipsum dolor sit amet consectetur
                                </Title>
                                <Paragraph ellipsis={{ rows: 3 }}>
                                    Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </Paragraph>
                            </Flex>
                            <Flex gap={4} align="center">
                                <Button shape="circle" onClick={prevSlide}>
                                    <ArrowLeftIcon />
                                </Button>
                                <Button shape="circle" onClick={nextSlide}>
                                    <ArrowRightIcon />
                                </Button>
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
