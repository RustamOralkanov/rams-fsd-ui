import common from "@styles/common.module.scss";
import { Carousel, Flex, Image, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { RefObject, useRef } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../app/constants/router";
import { Colors } from "../../../../shared/types/Colors";
import { CustomTag } from "../../../../shared/ui";
import { Complex } from "../../model/types/complex";
import "./ComplexBanner.scss";

const { Text, Title } = Typography;

export const ComplexBanner: React.FC<Complex> = (props) => {
    const carouselRef: RefObject<CarouselRef> = useRef(null);
    return (
        <Link to={"/" + APP_ROUTES.COMPLEXES + "/" + props.alias}>
            <Flex vertical className="complex-banner">
                <Flex align="center" gap={5} className={common.absolute} style={{ zIndex: 2, top: 30, left: 40 }}>
                    <CustomTag text={props.complex_class} type="default" />
                    {props.start_sale && <CustomTag text={"Старт продаж"} type="sale" />}
                </Flex>
                <Flex style={{ zIndex: 3, width: "calc(100%)", height: "100%" }} className={common.absolute}>
                    {[...Array(props.images.length)].map((_, index) => (
                        <div key={index} style={{ width: `calc(${100 / props.images.length}%)` }} onMouseEnter={() => carouselRef.current?.goTo(index, false)}></div>
                    ))}
                </Flex>
                <Carousel draggable className="complex-banner-carousel" ref={carouselRef}>
                    {props.images.map((image, index) => (
                        <div key={index}>
                            <Image src={image.url} preview={false} className={common.cover} width={"100%"} height={450} />
                        </div>
                    ))}
                </Carousel>
                <Flex vertical className={common.absolute} style={{ bottom: 30, left: 40, zIndex: 1 }}>
                    <Title style={{ color: Colors.white, fontWeight: 500 }}>{props.name}</Title>
                    <Text style={{ color: Colors.white, fontWeight: 200 }}>{props.address}</Text>
                    <Title level={4} style={{ color: Colors.white, fontWeight: 400 }}>
                        от {props.options[0].price.toLocaleString()} млн. ₸
                    </Title>
                </Flex>
            </Flex>
        </Link>
    );
};
