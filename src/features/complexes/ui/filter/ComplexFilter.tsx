import { Button, Checkbox, Col, Flex, Form, Row } from "antd";
import { useEffect, useState } from "react";
import { ClearButton, CustomInputRange, CustomRooms } from "../../../../shared/ui";
import { useGetComplexesFilterQuery } from "../../api/complexes.api";
import { ComplexParams } from "../../model/types/complex";
import { ComplexesFilterProps } from "../../model/types/filter";

export const ComplexFilter = ({ onFilterChange }: { onFilterChange: (values: ComplexParams) => void }) => {
    const [form] = Form.useForm();
    const [filterPros, setFilterProps] = useState<ComplexesFilterProps>({});
    const { data, isSuccess, isLoading } = useGetComplexesFilterQuery(filterPros);

    const setComplexFilterValues = () => {
        if (isSuccess && !isLoading) {
            form.setFieldsValue({
                rooms: data.filters.rooms,
                price: [data.filters.prices[0], data.filters.prices[1]],
                size: [data.filters.sizes[0], data.filters.sizes[1]],
                is_discount: false,
                start_sale: false,
                is_class_2: false,
                is_class_3: false,
                is_class_4: false,
            });
        }
    };

    useEffect(() => {
        setComplexFilterValues();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const onValuesChange = (_: unknown, values: ComplexParams) => {
        onFilterChange(values);
        setFilterProps(values);
    };

    return (
        <Form name="complex-filter" form={form} onValuesChange={onValuesChange}>
            <Row gutter={[20, 20]} align={"bottom"}>
                <Col xl={6}>
                    <Form.Item name={"rooms"}>
                        <CustomRooms is_title rooms={data?.filters.rooms || []} />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"price"}>
                        <CustomInputRange
                            title="Стоимость"
                            min={data?.filters.prices[0] || 0}
                            max={data?.filters.prices[1] || 0}
                            changedMin={data?.changedFilters.prices[0]}
                            changedMax={data?.changedFilters.prices[1]}
                        />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item name={"size"}>
                        <CustomInputRange
                            title="Площадь"
                            min={data?.filters.sizes[0] || 0}
                            max={data?.filters.sizes[1] || 0}
                            changedMin={data?.changedFilters.sizes[0]}
                            changedMax={data?.changedFilters.sizes[1]}
                            unit={
                                <span>
                                    м<sup>2</sup>
                                </span>
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xl={6}>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">
                            Показать {data?.changedFilters.counts} планировок
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Flex align="center" justify="space-between">
                        <Flex align="center" gap={10}>
                            {data?.filters.booleanFilters.map((item) => (
                                <Form.Item name={item.query} valuePropName="checked" key={item.query}>
                                    <Checkbox className="filter-checkbox">{item.name}</Checkbox>
                                </Form.Item>
                            ))}
                        </Flex>
                        <ClearButton
                            onClick={() => {
                                setComplexFilterValues();
                                onFilterChange(form.getFieldsValue());
                            }}
                        />
                    </Flex>
                </Col>
            </Row>
        </Form>
    );
};
