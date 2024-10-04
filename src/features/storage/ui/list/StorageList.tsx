import common from "@styles/common.module.scss";
import { Col, Flex, Row } from "antd";
import { useState } from "react";
import { useGetFlatsQuery } from "@/features/flats/api/flats.api";
import { IFlatsFilterValues } from "@/features/flats/model/flatsFilter.model";
import { FlatsListProps } from "@/features/flats/model/types/flatsList.model";
// import { LockIcon } from "@/shared/icons";
// import { Colors } from "@/shared/types/Colors";
import { CustomSort } from "../../../../shared/ui";
// import { storageJson as storages } from "../../config/index";
import { StorageCard } from "../card/StorageCard";
import { StorageFilter } from "../filter/StorageFilter";

export const StorageList: React.FC<FlatsListProps> = (props) => {
    const [storageFilter, setStorageFilter] = useState({} as IFlatsFilterValues);
    const { data } = useGetFlatsQuery({ ...storageFilter, property_type_id: props.type });

    const handleStorageFilter = (values: IFlatsFilterValues) => {
        setStorageFilter(values);
    };
    return (
        <Flex vertical gap={40}>
            <StorageFilter type_id={props.type} onFilterChange={handleStorageFilter} />
            {/* <Flex vertical className="border-gray-100 border-radius-l padding-30" style={{ aspectRatio: "12.4 / 7.37" }}>
                <Flex align="center" gap={20}>
                    <Flex align="center" gap={10}>
                        <div className="width-24 border-radius-xs bg-success-500" />
                        <Text>Свободно</Text>
                    </Flex>
                    <Flex align="center" gap={10}>
                        <div className="width-24 border-radius-xs bg-error-500" />
                        <Text>Забронировано</Text>
                    </Flex>
                </Flex>
                <svg width="100%" height="100%" viewBox={`0 0 ${storages.pantries["-1"].width} ${storages.pantries["-1"].height}`}>
                    <image href={"https://ramsqz.com" + storages.pantries["-1"].image} />
                    {Object.values(storages.pantries["-1"]).map((parking, index) => {
                        if (typeof parking === "object" && parking !== null && "parking_plan" in parking && parking.parking_plan?.coordinates) {
                            const coordinates = parking.parking_plan.coordinates.map((coord) => `${coord.x},${coord.y}`).join(" ");
                            const content = (
                                <Flex vertical gap={20} className="padding-20 border-radius-m">
                                    <Flex align="center" justify="space-between" gap={90}>
                                        <Title level={4}>Кладовая</Title>
                                        <Flex align="center" gap={5}>
                                            <Tag color={Colors.green500}>{"№ " + parking.id}</Tag>
                                            <LockIcon style={{ color: Colors.statusError500 }} />
                                        </Flex>
                                    </Flex>
                                    <Flex vertical>
                                        <Flex align="center" justify="space-between">
                                            <Text className="color-gray-500">Площадь</Text>
                                            <Title level={5}>
                                                {parking.area} м<sup>2</sup>
                                            </Title>
                                        </Flex>
                                        <Flex align="center" justify="space-between">
                                            <Text className="color-gray-500">Стоимость</Text>
                                            <Title level={5}>от {parking.price.toLocaleString()} ₸</Title>
                                        </Flex>
                                        <Flex align="center" justify="space-between">
                                            <Text className="color-gray-500">Цена за квадрат</Text>
                                            <Title level={5}>от 540 000 ₸</Title>
                                        </Flex>
                                    </Flex>
                                    <Button className="height-36" block>
                                        Подробнее
                                    </Button>
                                </Flex>
                            );

                            return (
                                <Popover key={index} content={content} trigger="click" style={{ padding: 0 }}>
                                    <path
                                        d={`M${coordinates}`}
                                        id={`park-${parking.property_id}`}
                                        className="parking-plan"
                                        style={{
                                            fill: "#10b981",
                                            strokeWidth: 1,
                                            opacity: 0.7,
                                            cursor: "pointer",
                                        }}
                                    />
                                </Popover>
                            );
                        }
                        return null;
                    })}
                </svg>
            </Flex> */}
            <Flex vertical gap={20} className={[common["bg-gray50"], common["padding-20"], common["radius-10"]].join(" ")}>
                <CustomSort />
                <Row gutter={[20, 10]}>
                    {data?.map((storage, index) => (
                        <Col key={index} span={24}>
                            <StorageCard {...storage} />
                        </Col>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};
