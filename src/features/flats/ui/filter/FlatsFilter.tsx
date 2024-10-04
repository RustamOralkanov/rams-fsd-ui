import { Col, Flex, Form, Row, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { Colors } from "@/shared/types/Colors";
import { ClearButton, CustomInputRange, CustomRooms, CustomSelect, CustomSelectTags } from "@/shared/ui";
import { useGetFlatsFilterQuery } from "../../api/flats.api";
import { IFlatsFilterValues } from "../../model/flatsFilter.model";
import { FlatsFilterProps } from "../../model/types/flatsFilter.model";

import "./FlatsFilter.scss";

const { Text } = Typography;

export const FlatsFilter: React.FC<FlatsFilterProps> = (props) => {
    const [form] = Form.useForm();
    const [additional_menu] = useState(false);
    const { data: filters, isLoading, isFetching } = useGetFlatsFilterQuery({ property_type_id: props.type_id });

    useEffect(() => {
        setFlatsFilterValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const setFlatsFilterValues = () => {
        form.setFieldsValue({
            complex: filters?.complexes,
            rooms: filters?.rooms,
            price: filters?.prices,
            size: filters?.sizes,
            class: filters?.complex_classes,
            city: filters?.cities,
            check_in_date: filters?.check_in_dates,
            facing: filters?.check_in_dates,
        });
    };

    const onValuesChange = (_: unknown, allValues: IFlatsFilterValues) => {
        if (props.onFilterChange) {
            props.onFilterChange(allValues);
        }
    };

    const clearForm = () => {
        form.resetFields();
        setFlatsFilterValues();
        props.onFilterChange({} as IFlatsFilterValues);
    };

    return (
        <Spin spinning={isFetching}>
            <Form onValuesChange={onValuesChange} form={form} name="flats-filter">
                <Row gutter={[20, 20]} align={"bottom"} className="flats-filter">
                    <Col xl={6}>
                        <Form.Item name={"complex"}>
                            <CustomSelectTags options={filters?.complexes} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"rooms"}>
                            <CustomRooms rooms={filters?.rooms || []} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"price"}>
                            <CustomInputRange title="Стоимость" min={filters?.prices[0]} max={filters?.prices[1]} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"size"}>
                            <CustomInputRange title="Площадь" min={filters?.sizes[0]} max={filters?.sizes[1]} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"class"}>
                            <CustomSelect title="Класс" options={filters?.complex_classes || []} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"city"}>
                            <CustomSelect title="Город" options={filters?.cities || []} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"check_in_date"}>
                            <CustomSelect title="Срок сдачи" options={filters?.check_in_dates || []} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"facing"}>
                            <CustomSelect title="Тип отделки" options={filters?.property_facings || []} />
                        </Form.Item>
                    </Col>
                    <Col span={24} className={["transited", additional_menu ? "show" : ""].join(" ")}>
                        <Flex justify={"space-between"} align="center">
                            <Text className="flats-count">
                                Найдено <b style={{ color: Colors.green600, fontWeight: 600 }}>{filters?.count}</b> планировок
                            </Text>
                            <ClearButton onClick={clearForm} />
                        </Flex>
                    </Col>
                </Row>
            </Form>
        </Spin>
    );
};
