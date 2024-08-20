import { Col, Flex, Row, Tabs } from "antd";
import { FlatCard } from "../../../../features/flats";
import { ParkingCard } from "../../../../features/parking";
import { StorageCard } from "../../../../features/storage";
import { Container, CustomSort } from "../../../../shared/ui";

export const FavoritesPage = () => {
    return (
        <section>
            <Container>
                <Tabs
                    items={[
                        {
                            key: "flats",
                            label: (
                                <span>
                                    Квартиры <sup>6</sup>
                                </span>
                            ),
                            children: (
                                <Flex vertical gap={20} className="flats-list-wrapper">
                                    <CustomSort />
                                    <Row gutter={[20, 20]}>
                                        {[...Array(8)].map((_, index) => (
                                            <Col key={index} xxl={6} xl={6}>
                                                <FlatCard />
                                            </Col>
                                        ))}
                                    </Row>
                                </Flex>
                            ),
                        },
                        {
                            key: "parkings",
                            label: (
                                <span>
                                    Машино-места <sup>3</sup>
                                </span>
                            ),
                            children: (
                                <Flex vertical gap={20} className="flats-list-wrapper">
                                    <CustomSort />
                                    <Row gutter={[20, 20]}>
                                        {[...Array(8)].map((_, index) => (
                                            <Col key={index} xxl={24} xl={24}>
                                                <ParkingCard />
                                            </Col>
                                        ))}
                                    </Row>
                                </Flex>
                            ),
                        },
                        {
                            key: "storages",
                            label: (
                                <span>
                                    Кладовые <sup>4</sup>
                                </span>
                            ),
                            children: (
                                <Flex vertical gap={20} className="flats-list-wrapper">
                                    <CustomSort />
                                    <Row gutter={[20, 20]}>
                                        {[...Array(8)].map((_, index) => (
                                            <Col key={index} xxl={24} xl={24}>
                                                <StorageCard />
                                            </Col>
                                        ))}
                                    </Row>
                                </Flex>
                            ),
                        },
                    ]}
                />
            </Container>
        </section>
    );
};
