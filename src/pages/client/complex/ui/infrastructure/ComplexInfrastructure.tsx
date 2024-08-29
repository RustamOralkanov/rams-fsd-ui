import { YMaps, Map, Polygon, Placemark } from "@pbe/react-yandex-maps";
import { Col, Flex, Image, Row, Typography } from "antd";
import ChevronRight from "@/app/assets/icons/chevron-right.svg";
import { LocationIcon } from "../../../../../shared/icons";
import { Container } from "../../../../../shared/ui/container";

import "./ComplexInfrastructure.scss";

const { Title, Text } = Typography;

const coordinates = [43.219848, 76.886733];

const locations = {
    nearest: [
        {
            minutes: "15 минут",
            location: "до Аль-Фараби",
        },
        {
            minutes: "10 минут",
            location: "до MEGA",
        },
    ],
    marks: [
        {
            name: "Университеты",
        },
        {
            name: "Школы",
        },
        {
            name: "Театры",
        },
        {
            name: "Детские сады",
        },
        {
            name: "Парки, аллеи",
        },
        {
            name: "Торговые площадки",
        },
        {
            name: "Больницы, аптеки",
        },
        {
            name: "Остановки",
        },
    ],
};

export const ComplexInfrastructure = () => {
    return (
        <section className="complex-infrastructure">
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Инфраструктура</Title>
                    <Row gutter={[20, 20]}>
                        <Col xxl={16} xl={16}>
                            <YMaps>
                                <Map
                                    defaultState={{ center: [43.240981, 76.912543], zoom: 11 }}
                                    width={"100%"}
                                    height={"100%"}
                                    style={{ aspectRatio: "8.6 / 5" }}
                                    className="border-radius-l overflow-hidden"
                                >
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
                        <Col xxl={8} xl={8}>
                            <Flex vertical gap={30} className="bg-gray-50 padding-20 border-radius-l height-full">
                                <Flex gap={30}>
                                    {locations.nearest.map((location, index) => (
                                        <Flex key={index} gap={15}>
                                            <Flex className="arrow-button" justify="center" align="center" style={{ width: 50, height: 50, borderRadius: 50 }}>
                                                <LocationIcon />
                                            </Flex>
                                            <Flex vertical>
                                                <Title level={5}>{location.minutes}</Title>
                                                <Text>{location.location}</Text>
                                            </Flex>
                                        </Flex>
                                    ))}
                                </Flex>
                                <Flex vertical>
                                    <Flex align="center" className="complex-infrastructure-item">
                                        <Flex align="center" gap={5} className={["complex-infrastructure-button", "active"].join(" ")}>
                                            <Text>Все</Text>
                                        </Flex>
                                    </Flex>
                                    {locations.marks.map((mark, index) => (
                                        <Flex key={index} className="complex-infrastructure-item">
                                            <Flex align="center" gap={5} className={["complex-infrastructure-button", index === 0 ? "active" : ""].join(" ")}>
                                                <Image width={24} height={24} preview={false} />
                                                <Text> {mark.name}</Text>
                                            </Flex>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
