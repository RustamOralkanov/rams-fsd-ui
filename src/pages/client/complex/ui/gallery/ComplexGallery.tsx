import { Carousel, Flex, Tabs, Typography, Image, Button } from "antd";
import { Container } from "../../../../../shared/ui/container";
import { CarouselRef } from "antd/es/carousel";
import { RefObject, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../../shared/icons";
import common from "../../../../../shared/styles/common.module.scss";
import "./ComplexGallery.scss";

const { Title } = Typography;

export const ComplexGallery = () => {
    const carouselRef: RefObject<CarouselRef> = useRef(null);

    return (
        <section>
            <Container>
                <Flex vertical gap={40} className="complex-gallery">
                    <Title level={2}>Галерея</Title>
                    <Tabs
                        destroyInactiveTabPane
                        items={[...Array(3)].map((_, index) => ({
                            key: `facade-${index}`,
                            label: "Фасад",
                            children: (
                                <div className={common.relative}>
                                    <Carousel draggable className={[common.hidden, common["radius-16"]].join(" ")} style={{ aspectRatio: "12.4 / 5.5" }} ref={carouselRef}>
                                        {[...Array(3)].map((_, imgIndex) => (
                                            <div key={imgIndex}>
                                                <Image
                                                    src="https://ramsqz.com/storage/complexes/gallery/poMIAPlYotQ8djsUdCQ0EI3CesuM3zdSACbLSdRD.jpg"
                                                    preview={false}
                                                    width="100%"
                                                    className={common.cover}
                                                    style={{ aspectRatio: "12.4 / 5.5" }}
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                    <Flex align="center" className="complex-gallery-btns" gap={10}>
                                        <Button shape="circle" className="arrow-button" onClick={() => carouselRef.current?.prev()}>
                                            <ArrowLeftIcon />
                                        </Button>
                                        <Button shape="circle" className="arrow-button" onClick={() => carouselRef.current?.next()}>
                                            <ArrowRightIcon />
                                        </Button>
                                    </Flex>
                                </div>
                            ),
                        }))}
                    />
                </Flex>
            </Container>
        </section>
    );
};
