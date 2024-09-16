import { Button, Checkbox, Col, Flex, Form, Row } from "antd";
import { useEffect } from "react";
import { ClearButton, CustomInputRange, CustomRooms } from "../../../../shared/ui";
import { useGetComplexesFilterQuery } from "../../api/complexes.api";
import { ComplexParams } from "../../model/types/complex";

export const ComplexFilter = ({ onFilterChange }: { onFilterChange: (values: ComplexParams) => void }) => {
    const [form] = Form.useForm();
    const { data, isSuccess, isLoading } = useGetComplexesFilterQuery();

    useEffect(() => {
        if (isSuccess && !isLoading) {
            form.setFieldsValue({
                rooms: data.rooms,
                price: [data.prices[0], data.prices[1]],
                size: [data.sizes[0], data.sizes[1]],
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const onValuesChange = (_: unknown, values: ComplexParams) => {
        onFilterChange(values);
    };

    if (isSuccess)
        return (
            <Form name="complex-filter" form={form} onValuesChange={onValuesChange}>
                <Row gutter={[20, 20]} align={"bottom"}>
                    <Col xl={6}>
                        <Form.Item name={"rooms"}>
                            <CustomRooms is_title rooms={data.rooms} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"price"}>
                            <CustomInputRange title="Стоимость" min={data.prices[0] || 0} max={data.prices[1] || 0} />
                        </Form.Item>
                    </Col>
                    <Col xl={6}>
                        <Form.Item name={"size"}>
                            <CustomInputRange
                                title="Площадь"
                                min={data.sizes[0] || 0}
                                max={data.sizes[1] || 0}
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
                                Показать {data.counts} планировок
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Flex align="center" justify="space-between">
                            <Flex align="center" gap={10}>
                                <Form.Item name={"is_discount"} valuePropName="checked">
                                    <Checkbox className="filter-checkbox">Со скидкой</Checkbox>
                                </Form.Item>
                                <Form.Item name={"start_sale"} valuePropName="checked">
                                    <Checkbox className="filter-checkbox">Старт продаж</Checkbox>
                                </Form.Item>
                            </Flex>
                            <ClearButton onClick={() => form.resetFields()} />
                        </Flex>
                    </Col>
                </Row>
            </Form>
        );
};
