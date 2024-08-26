import { YMaps, Map, Polygon, Placemark } from "@pbe/react-yandex-maps";
import { Button, Col, Flex, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import ChevronRight from "@/app/assets/icons/chevron-right.svg";
import { CustomTag } from "@/shared/ui";
import { contactsSalesOffices } from "../../model/contacts.data";
import "./ContactsSales.scss";

const { Title, Text } = Typography;

export const ContactsSales = () => {
    const [current_index, set_current_index] = useState<number>(0);
    const coordinates = [43.219848, 76.886733];

    return (
        <Row gutter={[20, 20]} className="contact-sales">
            <Col xl={6}>
                <Flex vertical gap={10}>
                    {contactsSalesOffices.map((office, index) => (
                        <Flex
                            vertical
                            gap={15}
                            key={index}
                            className={["border-gray-100 border-radius-m padding-20 contact-sales-card", current_index === index ? "active" : ""].join(" ")}
                            onClick={() => set_current_index(index)}
                        >
                            <Title level={3} className="contact-sales-card-title">
                                {office.address}
                            </Title>
                            {current_index === index && (
                                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    <Flex vertical>
                                        {office.time.map((time, index) => (
                                            <Text key={index}>
                                                {time.days} <b>{time.times}</b>
                                            </Text>
                                        ))}
                                    </Flex>
                                </motion.span>
                            )}
                            <Flex gap={10} align="center">
                                {office.complexes.map((complex, index) => (
                                    <CustomTag text={complex} key={index} type="gray" />
                                ))}
                            </Flex>
                            {current_index === index && (
                                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    <Flex vertical gap={15}>
                                        <Button className="white-button">Подробнее</Button>
                                        <Button className="white-button">Проложить маршрут</Button>
                                    </Flex>
                                </motion.span>
                            )}
                        </Flex>
                    ))}
                </Flex>
            </Col>
            <Col xl={18}>
                <YMaps>
                    <Map defaultState={{ center: [43.240981, 76.912543], zoom: 11 }} width={"100%"} height={"100%"}>
                        <Placemark
                            geometry={coordinates}
                            onClick={() => console.log("ok")}
                            properties={{
                                iconContent: `<div class="map-tooltip">
                                                <div class="map-tooltip-image">
                                                <img src='${"https://ramsqz.com/images/boulevard2.jpg?d6b4df72799e19aebb4702a5b9a2f441"}' alt='tooltip'/>
                                                </div>
                                                <div class="map-tooltip-wrapper">
                                                    <h3 class="map-tooltip-title">${"RAMS City"}</h3>
                                                    <div class="map-tooltip-bottom">
                                                        <div class="map-tooltip-class">Бизнес</div>
                                                        <div class="map-tooltip-chevron">
                                                        <img src='${ChevronRight}'/>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>`,
                            }}
                        />
                        <Polygon
                            geometry={[
                                [
                                    [43.22206790266688, 76.88408718406401],
                                    [43.21973173812876, 76.8849647569669],
                                    [43.21769261195979, 76.8875487831678],
                                    [43.218113708184376, 76.88789005847303],
                                    [43.21838164308144, 76.88864767932694],
                                    [43.22378186632403, 76.88782322499418],
                                    [43.224508143479795, 76.88756613888717],
                                    [43.22206790266688, 76.88408718406401],
                                ],
                            ]}
                            options={{
                                fill: false,
                                strokeColor: "#6C6D6D",
                                opacity: 1,
                                strokeWidth: 2,
                                strokeStyle: "solid",
                            }}
                        />
                    </Map>
                </YMaps>
            </Col>
        </Row>
    );
};
