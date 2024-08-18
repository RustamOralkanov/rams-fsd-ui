import common from "@styles/common.module.scss";
import { Carousel, Flex, Image, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { RefObject, useRef } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../app/constants/router";
import { Colors } from "../../../../shared/types/Colors";
import { CustomTag } from "../../../../shared/ui";
import "./ComplexBanner.scss";

const { Text, Title } = Typography;

export const ComplexBanner = () => {
    const carouselRef: RefObject<CarouselRef> = useRef(null);
    return (
        <Link to={"/" + APP_ROUTES.COMPLEXES + "/" + "alias"}>
            <Flex vertical className="complex-banner">
                <Flex align="center" gap={5} className={common.absolute} style={{ zIndex: 2, top: 30, left: 40 }}>
                    <CustomTag text={"Бизнес"} type="default" />
                    <CustomTag text={"Чистовая отделка"} type="default" />
                    <CustomTag text={"Старт продаж"} type="sale" />
                    <CustomTag text={"Индивидуальная рассрочка"} type="installment" />
                </Flex>
                <Flex style={{ zIndex: 3, width: "calc(100%)", height: "100%" }} className={common.absolute}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} style={{ width: `calc(${100 / 3}%)` }} onMouseEnter={() => carouselRef.current?.goTo(index, false)}></div>
                    ))}
                </Flex>
                <Carousel draggable className="complex-banner-carousel" ref={carouselRef}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index}>
                            <Image
                                src="https://ramsqz.com/storage/complexes/banners/C1ihw0z5k7WeYvsKZgECBqZVEdVd0nspz8QGN0D6.jpg"
                                preview={false}
                                className={common.cover}
                                width={"100%"}
                                height={450}
                            />
                        </div>
                    ))}
                </Carousel>
                <Flex vertical className={common.absolute} style={{ bottom: 30, left: 40 }}>
                    <Title style={{ color: Colors.white, fontWeight: 500 }}>RAMS City</Title>
                    <Text style={{ color: Colors.white, fontWeight: 200 }}>Алматы, улица Жандосова, 94а</Text>
                    <Title level={4} style={{ color: Colors.white, fontWeight: 400 }}>
                        от 43 млн. ₸
                    </Title>
                </Flex>
            </Flex>
        </Link>
    );
};
