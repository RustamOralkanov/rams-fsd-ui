import { Carousel, Flex, Image, Typography } from "antd";
import { ChevronDownIcon } from "../../../../../shared/icons";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import MortageIcon from "../../../../../app/assets/icons/mortgage.svg";
import "./FlatPaymentCarousel.scss";

const { Text } = Typography;

const data = [
    {
        title: "Обмен квартиры по программе Trade-in",
    },
    {
        title: "Обмен квартиры по программе Auto trade-in",
    },
];

export const FlatPaymentCarousel = () => {
    const carouselRef = useRef<CarouselRef>(null);
    return (
        <Flex className="flats-payments-carousel" justify="center" align="center" gap={20}>
            <ChevronDownIcon onClick={() => carouselRef.current?.prev()} className="arrow" />
            <Carousel ref={carouselRef} dots={false}>
                {data.map((info, index) => (
                    <div key={index}>
                        <Flex justify="center" align="center" gap={20} className="slide">
                            <Image src={MortageIcon} preview={false} style={{ width: 24 }} />
                            <Text>{info.title}</Text>
                        </Flex>
                    </div>
                ))}
            </Carousel>
            <ChevronDownIcon onClick={() => carouselRef.current?.next()} className="arrow" />
        </Flex>
    );
};
