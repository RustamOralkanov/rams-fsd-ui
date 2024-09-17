import { Flex, Row, Col } from "antd";
import { CustomSort } from "../../../../shared/ui";
import { useGetFlatsQuery } from "../../api/flats.api";
import { FlatsListProps } from "../../model/types/flatsList.model";
import { FlatBanner } from "../banner/FlatBanner";
import { FlatCard } from "../card/common/FlatCard";
import { FlatsFilter } from "../filter/FlatsFilter";
import "./FlatsList.scss";

export const FlatsList: React.FC<FlatsListProps> = (props) => {
    const { data: flats, isSuccess } = useGetFlatsQuery();

    console.log(props);

    return (
        <Flex vertical gap={40} className="flats-list">
            <FlatsFilter />
            <Flex vertical gap={20} className="flats-list-wrapper">
                <CustomSort />
                <FlatBanner />
                <Row gutter={[20, 20]}>
                    {isSuccess &&
                        flats.map((flat, index) => (
                            <Col key={index} xxl={6} xl={6}>
                                <FlatCard {...flat} />
                            </Col>
                        ))}
                </Row>
            </Flex>
        </Flex>
    );
};
