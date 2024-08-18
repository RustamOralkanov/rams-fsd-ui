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

export const ComplexCard: React.FC<IComplexCard> = () => {
    const { height, set_height, carouselRef } = useComplexCard();

    return (
        <Link to={"/" + APP_ROUTES.COMPLEXES + "/" + "alias"}>
            <Flex vertical gap={17} className="complex-card" onMouseEnter={() => set_height(240)} onMouseLeave={() => set_height(357)}>
                <div className={common.relative}>
                    <Flex align="center" gap={5} className={common.absolute} style={{ zIndex: 2, top: 20, left: 20 }}>
                        <CustomTag text={"Бизнес"} type="default" />
                        <CustomTag text={"Индивидуальная рассрочка"} type="installment" />
                        <CustomTag text={"title"} type="title" />
                    </Flex>
                    <Flex style={{ zIndex: 3, width: "calc(100%)", height: height }} className={common.absolute}>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} style={{ width: `calc(${100 / 3}%)`, height: height }} onMouseEnter={() => carouselRef.current?.goTo(index, false)}></div>
                        ))}
                    </Flex>
                    <Carousel className={[common["radius-16"], common.hidden].join(" ")} style={{ height: height }} ref={carouselRef}>
                        {[...Array(3)].map((_, index) => (
                            <div key={index}>
                                <Image
                                    src="https://ramsqz.com/storage/complexes/banners/C1ihw0z5k7WeYvsKZgECBqZVEdVd0nspz8QGN0D6.jpg"
                                    preview={false}
                                    className={common.cover}
                                    height={height}
                                    width={"100%"}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <Flex vertical gap={20} style={{ padding: "0 10px" }}>
                    <Flex vertical gap={4}>
                        <Title level={3} ellipsis style={{ fontWeight: 500, lineHeight: 1 }}>
                            Название объекта
                        </Title>
                        <Flex justify="space-between" align="center">
                            <Text style={{ lineHeight: 1.3 }}>мкр Ремизовка, ул.Арайлы 2/12</Text>
                            <Title level={5} style={{ lineHeight: 1 }}>
                                от 43 млн. ₸
                            </Title>
                        </Flex>
                    </Flex>
                    <Flex vertical>
                        <Text>Доступно 157 планировок</Text>
                        <Flex justify="space-between" align="center">
                            <Text style={{ color: Colors.info600 }}>
                                1-комн. от 50 м
                                <sup>
                                    <small>2</small>
                                </sup>
                            </Text>
                            <Title level={5}>от 32 650 000 ₸</Title>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <Text style={{ color: Colors.info600 }}>
                                2-комн. от 85 м
                                <sup>
                                    <small>2</small>
                                </sup>
                            </Text>
                            <Title level={5}>от 85 650 000 ₸</Title>
                        </Flex>
                        <Flex justify="space-between" align="center">
                            <Text style={{ color: Colors.info600 }}>
                                3-комн. от 85 м
                                <sup>
                                    <small>2</small>
                                </sup>
                            </Text>
                            <Title level={5}>от 85 650 000 ₸</Title>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
};
