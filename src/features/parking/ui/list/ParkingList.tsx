import { Col, Flex, Row } from "antd";
import { ParkingFilter } from "../filter/ParkingFilter";
import { CustomSort } from "../../../../shared/ui";
import { ParkingCard } from "../card/ParkingCard";
import common from "../../../../shared/styles/common.module.scss";

export const ParkingList = () => {
    return (
        <Flex vertical gap={40}>
            <ParkingFilter />
            <Flex vertical gap={20} className={[common["bg-gray50"], common["padding-20"], common["radius-10"]].join(" ")}>
                <CustomSort />
                <Row gutter={[20, 10]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} span={24}>
                            <ParkingCard />
                        </Col>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};
