import { Flex, Row, Col, Spin } from "antd";
import { useState } from "react";
import { CustomSort } from "../../../../shared/ui";
import { useGetFlatsQuery } from "../../api/flats.api";
import { IFlatsFilterValues } from "../../model/flatsFilter.model";
import { FlatsListProps } from "../../model/types/flatsList.model";
import { FlatCard } from "../card/common/FlatCard";
import { FlatsFilter } from "../filter/FlatsFilter";
import "./FlatsList.scss";

export const FlatsList: React.FC<FlatsListProps> = (props) => {
    const [flatsFilter, setFlatsFilter] = useState({} as IFlatsFilterValues);
    const { data: flats, isSuccess, isFetching } = useGetFlatsQuery({ ...flatsFilter, property_type_id: props.type });

    const handleFlatsFilter = (values: IFlatsFilterValues) => {
        setFlatsFilter({
            ...values,
            rooms: Array.isArray(values.rooms) ? values.rooms.map((item) => item.value).join(",") : values.rooms,
            city: Array.isArray(values.city) ? values.city.map((item) => item.id).join(",") : values.city,
            facing: Array.isArray(values.facing) ? values.facing.map((item) => item.id).join(",") : values.facing,
            class: Array.isArray(values.class) ? values.class.map((item) => item.id).join(",") : values.class,
            check_in_date: Array.isArray(values.check_in_date) ? values.check_in_date.map((item) => item.id).join(",") : values.check_in_date,
            complex: Array.isArray(values.complex)
                ? values.complex
                      .map((item) => {
                          if (item.id) {
                              return item.id;
                          } else {
                              return item;
                          }
                      })
                      .join(",")
                : values.complex,
        });
    };

    return (
        <Flex vertical gap={40} className="flats-list">
            <FlatsFilter type_id={props.type} onFilterChange={handleFlatsFilter} />
            <Flex vertical gap={20} className="flats-list-wrapper">
                <CustomSort />
                <Spin spinning={isFetching}>
                    <Row gutter={[20, 20]}>
                        {isSuccess &&
                            flats.map((flat, index) => (
                                <Col key={index} xxl={6} xl={6}>
                                    <FlatCard {...flat} />
                                </Col>
                            ))}
                    </Row>
                </Spin>
            </Flex>
        </Flex>
    );
};
