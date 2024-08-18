import common from "@styles/common.module.scss";
import { Col, Flex, Row } from "antd";
import { CustomSort } from "../../../../shared/ui";
import { StorageCard } from "../card/StorageCard";
import { StorageFilter } from "../filter/StorageFilter";

export const StorageList = () => {
    return (
        <Flex vertical gap={40}>
            <StorageFilter />
            <Flex vertical gap={20} className={[common["bg-gray50"], common["padding-20"], common["radius-10"]].join(" ")}>
                <CustomSort />
                <Row gutter={[20, 10]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} span={24}>
                            <StorageCard />
                        </Col>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};
