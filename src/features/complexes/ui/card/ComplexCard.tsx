import common from "@styles/common.module.scss";
import { Carousel, Flex, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../app/constants/router";
import { Colors } from "../../../../shared/types/Colors";
import { CustomTag } from "../../../../shared/ui";
import { IComplexCard } from "../../model/complexCard.model";
import { useComplexCard } from "../../model/useComplexCard";

import "./ComplexCard.scss";

const { Text, Title } = Typography;

export const ComplexCard: React.FC<IComplexCard> = (props) => {
    const { height, set_height, carouselRef } = useComplexCard();

    return (
        <Link to={"/" + APP_ROUTES.COMPLEXES + "/" + props.alias}>
            <Flex vertical gap={17} className="complex-card" onMouseEnter={() => set_height(240)} onMouseLeave={() => set_height(357)}>
                <div className={common.relative}>
                    <Flex align="center" gap={5} className={common.absolute} style={{ zIndex: 2, top: 20, left: 20 }} wrap>
                        <CustomTag text={props?.complex_class || "n/d"} type="default" />
                        {props.start_sale && <CustomTag text={"Старт продаж"} type="sale" />}
                    </Flex>
                    <Flex style={{ zIndex: 3, width: "calc(100%)", height: height }} className={common.absolute}>
                        {[...Array(props.images && props.images.length)].map((_, index) => (
                            <div
                                key={index}
                                style={{ width: `calc(${100 / (props.images ? props.images.length : 1)}%)`, height: height }}
                                onMouseEnter={() => carouselRef.current?.goTo(index, false)}
                            ></div>
                        ))}
                    </Flex>
                    <Carousel className={[common["radius-16"], common.hidden].join(" ")} style={{ height: height }} ref={carouselRef}>
                        {props.images &&
                            props.images.map((image, index) => (
                                <div key={index}>
                                    <Image src={image.url} preview={false} className={common.cover} height={height} width={"100%"} />
                                </div>
                            ))}
                    </Carousel>
                </div>
                <Flex vertical gap={20} style={{ padding: "0 10px" }}>
                    <Flex vertical gap={4}>
                        <Title level={3} ellipsis style={{ fontWeight: 500, lineHeight: 1 }}>
                            {props.name}
                        </Title>
                        <Flex justify="space-between" align="flex-start">
                            <Text style={{ lineHeight: 1.3, maxWidth: 270 }}>{props.address}</Text>
                            <Title level={5} style={{ lineHeight: 1 }}>
                                от {props && props.options?.length ? reduceMinPrice(props?.options[0].price) : "n/d"} млн. ₸
                            </Title>
                        </Flex>
                    </Flex>
                    <Flex vertical>
                        <Text>Доступно {props.total_count || "n/d"} планировок</Text>
                        {props.options?.map((option, index) => (
                            <Flex justify="space-between" align="center" key={index}>
                                <Text style={{ color: Colors.info600 }}>
                                    {option.rooms}-комн. от {option.size} м
                                    <sup>
                                        <small>2</small>
                                    </sup>
                                </Text>
                                <Title level={5}>от {option.price.toLocaleString()} ₸</Title>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
};

const reduceMinPrice = (value: number) => {
    const price = value;
    return (price / 1000000).toFixed(0);
};
