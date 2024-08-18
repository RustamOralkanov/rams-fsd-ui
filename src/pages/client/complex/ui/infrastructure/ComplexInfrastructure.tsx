import common from "@styles/common.module.scss";
import { Col, Flex, Row, Typography } from "antd";
import { LocationIcon } from "../../../../../shared/icons";
import { Container } from "../../../../../shared/ui/container";

const { Title, Text } = Typography;

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
                        <Col xxl={16} xl={16}></Col>
                        <Col xxl={8} xl={8}>
                            <Flex vertical gap={30} className={[common["bg-gray50"], common["radius-16"], common["padding-20"]].join(" ")}>
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
                                <Flex vertical>1</Flex>
                            </Flex>
                        </Col>
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
