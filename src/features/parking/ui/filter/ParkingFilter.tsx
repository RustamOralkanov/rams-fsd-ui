import { Col, Flex, Form, Row, Spin, Typography } from "antd";
import { useEffect } from "react";
import { useGetFlatsFilterQuery } from "@/features/flats/api/flats.api";
import { IFlatsFilterValues } from "@/features/flats/model/flatsFilter.model";
import { FlatsFilterProps } from "@/features/flats/model/types/flatsFilter.model";
import { Colors } from "@/shared/types/Colors";
import { ClearButton, CustomInputRange, CustomSelect, CustomSelectTags } from "@/shared/ui";
import { useParkingFilter } from "../../model/useParkingFilter";

const { Text } = Typography;

export const ParkingFilter: React.FC<FlatsFilterProps> = (props) => {
    const { form } = useParkingFilter();
    const { data: filters, isLoading, isFetching } = useGetFlatsFilterQuery({ property_type_id: props.type_id });

    const setFlatsFilterValues = () => {
        form.setFieldsValue({
            complex: filters?.complexes,
            size: filters?.sizes,
            features: filters?.complex_classes,
        });
    };

    useEffect(() => {
        setFlatsFilterValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

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
            <Form onValuesChange={onValuesChange} form={form} name="parking-filter">
                <Row gutter={[20, 20]} align={"bottom"}>
                    <Col xl={6}>
                        <Form.Item name={"complex"}>
                            <CustomSelectTags options={filters?.complexes || []} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"size"}>
                            <CustomInputRange title="Общая площадь" min={filters?.sizes[0]} max={filters?.sizes[1]} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"features"}>
                            <CustomSelect title="Особенности" options={[]} />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Flex justify={"space-between"} align="center">
                            <Text className="flats-count">
                                Найдено <b style={{ color: Colors.green600, fontWeight: 600 }}>9 825</b> планировок
                            </Text>
                            <ClearButton onClick={clearForm} />
                        </Flex>
                    </Col>
                </Row>
            </Form>
        </Spin>
    );
};
