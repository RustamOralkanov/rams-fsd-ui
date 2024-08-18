import { Flex, Row, Col } from "antd";
import { CustomSort } from "../../../../shared/ui";
import { FlatBanner } from "../banner/FlatBanner";
import { FlatCard } from "../card/common/FlatCard";
import { FlatsFilter } from "../filter/FlatsFilter";
import "./FlatsList.scss";

export const FlatsList = () => {
    return (
        <Flex vertical gap={40} className="flats-list">
            <FlatsFilter />
            <Flex vertical gap={20} className="flats-list-wrapper">
                <CustomSort />
                <FlatBanner />
                <Row gutter={[20, 20]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} xxl={6} xl={6}>
                            <FlatCard />
                        </Col>
                    ))}
                </Row>
            </Flex>
        </Flex>
    );
};
